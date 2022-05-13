import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import { useRouter } from "next/router";

// const searchClient = algoliasearch(
//   "PGIH0KF5F5",
//   "faf1987de1d83c02e82fbf9bfd7ca5a9"
// );

// autocomplete({
//   container: "#autocomplete",
//   placeholder: "Search repositories",
// });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Layout>
      <Component {...pageProps} />
      {/* {asPath === "/" && <div id="autocomplete"></div>} */}
    </Layout>
  );
}

export default MyApp;
