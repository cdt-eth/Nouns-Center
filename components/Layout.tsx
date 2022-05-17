import Divider from "./Divider";
import Navigation from "./Navigation";
import Newsletter from "./Newsletter";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const { asPath, route, pathname } = router;

  return (
    <>
      <Navigation />

      <div className="xs:px-6 xs:pt-4 xs:pb-12 sm:py-12 sm:px-10 flex flex-col flex-1 flex-between h-auto text-black bg-grey-light dark:bg-black dark:text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}

        <main className="pb-10 w-full">
          {asPath === "/" && (
            <>
              <video
                id="background-video"
                src="/nounish.mp4"
                className="xs:hidden sm:block"
                autoPlay
                loop
                webkit-playsinline
                playsInline
                muted
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sm:hidden nounish"
                src="/nnsh.gif"
                alt="nounish"
              />

              <div className="bg-gradient"></div>
              <div className="bg-gradient2"></div>
              <div className="bg-gradient3"></div>
              {/* <div className="bg-gradient4"></div> */}
            </>
          )}
          {children}
        </main>

        {/* {asPath !== "/" && ( */}
        {/* {asPath !== "/" && (
          <>
            <Divider />

            <Newsletter />
          </>
        )} */}
      </div>
    </>
  );
}
