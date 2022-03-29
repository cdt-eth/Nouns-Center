/* eslint-disable @next/next/no-img-element */
import React from "react";
import Dino from "../components/Dino";
import Header from "../components/Header";
import Title from "../components/Title";

const Custom404 = () => {
  return (
    <div>
      <Header title="404 | Nouns Center" />
      <Title title="404: Page Not Found" />
      <span className="xs:hidden sm:block">
        <Dino />
      </span>
      <img className="sm:hidden" src="/dino/error_b.png" alt="dino" />
      {/* <img className="sm:hidden" src="/dino/error.jpg" alt="dino" /> */}
    </div>
  );
};

export default Custom404;
