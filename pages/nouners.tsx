import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";

const Nouners = ({ tableIds }) => {
  return (
    <div>
      <Header title="Nouners | Nouns Center" />
      <Title title="Nouners" />
    </div>
  );
};

export default Nouners;
