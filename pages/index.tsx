/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/Header";
import Script from "next/script";
import Title from "./components/Title";
// import algoliasearch from "algoliasearch/lite";
// import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import ComingSoon from "./components/ComingSoon";
import Hero from "./components/Home/Hero";

export default function Home() {
  // const searchClient = algoliasearch(
  //   process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  //   process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  // );

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6K115N5T7V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-6K115N5T7V');
          `}
      </Script>

      <Header title="Nouns Center" />

      <Hero />

      {/* <ComingSoon /> */}
    </>
  );
}
