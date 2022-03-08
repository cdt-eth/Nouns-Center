import React from "react";
import Header from "./components/Header";
import Script from "next/script";
import Title from "./components/Title";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

export default function Home() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );

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
      {/* <Title title="Home" /> */}

      <>
        {/* <InstantSearch searchClient={searchClient} indexName="nouncenter"> */}
        {/* Adding Search Box */}
        {/* <SearchBox /> */}

        {/* Adding Data */}
        {/* <Hits />
        </InstantSearch> */}
        <div className="w-full flex mt-20 flex-col items-center justify-center gap-4">
          <img className="w-1/6 mr-2" src="earth.gif" alt="earth" />
          <p className="text-nouns xs:text-3xl sm:text-6xl">
            home page coming soon
          </p>
        </div>
      </>
    </>
  );
}
