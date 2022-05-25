import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="xs:px-8 xs:py-6 md:px-4 lg:px-0 sm:py-12 sm:max-w-3xl m-auto bg-grey-lightest">
      {children}
    </div>
  );
};

export default PageContent;
