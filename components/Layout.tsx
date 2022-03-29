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
      <div className="xs:px-6 md:pl-[18rem] py-12 flex flex-col flex-1 flex-between h-screen bg-black text-white">
        <main className="pb-10">{children}</main>

        {asPath !== "/" && (
          <>
            <Divider />

            <Newsletter />
          </>
        )}
      </div>
    </>
  );
}
