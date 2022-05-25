import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="bg-grey-lightest border-b">
      <div className="xs:py-8 xs:px-8 md:px-4 lg:px-0 sm:py-12 sm:pt-6 sm:max-w-3xl m-auto">
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
