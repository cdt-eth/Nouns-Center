import React from "react";
import Header from "./components/Header";
import SubheaderBodyButton from "./components/SubheaderBodyButton";
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

      <SubheaderBodyButton
        title="Small Grants &#38; Reto Funding"
        body="A list of all projects &#38; creators who have either been given a
          grant from NounsDAO or received retroactive funding for proliferating
          Nouns."
        btnLink="https://discord.com/channels/849745721544146955/903077530502828092"
        btnText="Request funding"
      />

      {grantsData && <Table grants={grantsData} />}
    </div>
  );
};

export default Funding;
