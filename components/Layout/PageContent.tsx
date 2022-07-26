import React from "react";
import { useRouter } from "next/router";
import Divider from "../Divider";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const PageContent = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    // <div className="xs:py-6 lg:px-0 sm:py-12  bg-grey-lightest">
    //  <div className="xs:px-8 xs:py-6 md:px-4 lg:px-0 sm:py-12 sm:max-w-3xl m-auto bg-grey-lightest">
    <div className="xs:py-6 xs:px-6 sm:px-0 lg:px-0 sm:py-12  bg-grey-lightest">
      {children}

      {asPath !== "/" && (
        <>
          <Divider />

          <div className="sm:ml-20 mb-2">
            <Newsletter />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default PageContent;
