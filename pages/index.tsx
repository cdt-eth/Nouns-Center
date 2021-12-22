import React from "react";
import Header from "./components/Header";
import Script from "next/script";
import Title from "./components/Title";

export default function Home() {
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
      <Title title="Home" />
    </>
  );
}
