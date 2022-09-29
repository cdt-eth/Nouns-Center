import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <div className="bg-grey-lightest border-b">
      <div className="xs:py-8 xs:px-6 xl:px-0 sm:py-6 sm:pt-6 m-auto">{children}</div>
    </div>
  );
};

export default PageHeader;
