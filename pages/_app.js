import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import algoliasearch from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import { useRouter } from 'next/router';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Nouns Center',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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

  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     //check if there is any key for theme in local storage and if the system color theme is dark
  //     document.documentElement.classList.remove("light"); //OPTIONAL - remove light from the html document if any
  //     document.documentElement.classList.add("dark"); // add dark to the <html></html> itself as <html class='dark'></html>
  //   } else {
  //     document.documentElement.classList.remove("dark"); // remove dark from the html document if any
  //     document.documentElement.classList.add("light"); //OPTIONAL - add light to the <html></html> itself as <html class='light'></html>
  //   }
  // }, []);

  return (
    <Layout>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      {/* {asPath === "/" && <div id="autocomplete"></div>} */}
    </Layout>
  );
}

export default MyApp;
