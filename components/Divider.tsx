import React from "react";

const Divider = () => {
  return (
    <div className="relative xs:py-4 xs:mt-4 sm:py-8 w-full m-auto opacity-70">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-grey-lightest  text-sm">⌐◨-◨</span>
      </div>
    </div>
  );
};

export default Divider;
