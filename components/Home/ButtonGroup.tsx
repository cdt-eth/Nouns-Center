import React from "react";
import HomeButton from "./HomeButton";

const ButtonGroup = () => {
  return (
    <div className="mt-5 mx-auto xs:grid grid-cols-2 xs:gap-3 sm:gap-0 sm:flex sm:justify-center md:mt-8">
      <HomeButton path="projects" text="View Projects" />
      <HomeButton path="funding" text="Get Funding" />
      <HomeButton path="history" text="Learn the History" />
      <HomeButton path="assets" text="Download Assets" />
      <HomeButton path="traits" text="View Traits" />
    </div>
  );
};

export default ButtonGroup;
