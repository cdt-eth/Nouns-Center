import React from "react";
import Dino from "./components/Dino";
import Header from "./components/Header";
import Title from "./components/Title";

const Custom404 = () => {
  return (
    <div>
      <Header title="404 | Nouns Center" />
      <Title title="404: Page Not Found" />
      <Dino />
    </div>
  );
};

export default Custom404;
