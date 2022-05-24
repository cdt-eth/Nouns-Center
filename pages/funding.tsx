import React from "react";
import Button from "../components/common/Button";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Table from "../components/nouners/Table";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const twentytwoNotionPage = "ac22114a6c004bafa500e2d824e32dc3";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/table/${twentytwoNotionPage}`
    );
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String("No data was found!");
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      grantsData: data,
    },
  };
}

const Funding = ({ grantsData }) => {
  return grantsData ? (
    <>
      <PageHeader>
        <Header title="Funding | Nouns Center" />
        <Title title="Funding" />

        <Subheader
          title="Small Grants &#38; Reto Funding"
          body="A list of all projects &#38; creators who have either been given a
          grant from NounsDAO or received retroactive funding for proliferating
          Nouns."
        />
        <Button
          text="Request funding"
          link="https://discord.com/channels/849745721544146955/903077530502828092"
        />
      </PageHeader>

      <PageContent>
        <Table grants={grantsData} />
      </PageContent>
    </>
  ) : (
    <></>
  );
};

export default Funding;
