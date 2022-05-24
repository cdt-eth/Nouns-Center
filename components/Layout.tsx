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

      <div className=" flex flex-col flex-1 flex-between h-auto text-black m-auto">
        <main className="pb-10 w-full">
          {asPath === "/" && (
            <>
              <video
                id="background-video"
                src="/nounish.mp4"
                className="xs:hidden sm:block"
                autoPlay
                loop
                webkit-playsinline="true"
                playsInline
                muted
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                className="sm:hidden nounish"
                src="/nnsh.gif"
                alt="nounish"
              /> */}

              <div className="bg-gradient"></div>
              <div className="bg-gradient2"></div>
              <div className="bg-gradient3"></div>
            </>
          )}

          {children}
        </main>

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
