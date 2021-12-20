import Header from "./components/Header";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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

      <img className="xs:w-10/12 sm:w-1/2" src="./logo.png" alt="earth" />
    </div>
  );
}
