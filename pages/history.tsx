import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Timeline from "../components/Timeline/Timeline";

const History = () => {
  return (
    <div>
      <Header title="History | Nouns Center" />
      <Title title="History" />

      <Timeline />
    </div>
  );
};

export default History;
