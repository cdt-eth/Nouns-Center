/* eslint-disable @next/next/no-img-element */
import React from "react";

const ComingSoon = () => {
  return (
    <div className="w-full flex mt-20 flex-col items-center justify-center gap-4">
      <img className="w-1/6 mr-2" src="earth.gif" alt="earth" />
      <p className="text-nouns xs:text-3xl sm:text-6xl">
        home page coming soon
      </p>
    </div>
  );
};

export default ComingSoon;
