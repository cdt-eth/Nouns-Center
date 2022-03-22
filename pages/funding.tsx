import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Table from "./nouners/Table";

const twentytwoNotionPage = "ac22114a6c004bafa500e2d824e32dc3";

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${twentytwoNotionPage}`
  ).then((res) => res.json());

  return {
    props: {
      grantsData: data,
    },
  };
}

const Funding = ({ grantsData }) => {
  return (
    <div>
      <Header title="Funding | Nouns Center" />
      <Title title="Funding" />

      <Table grants={grantsData} />
    </div>
  );
};

export default Funding;
