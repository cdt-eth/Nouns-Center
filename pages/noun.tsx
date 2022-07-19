/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";

const Noun = () => {
  return (
    <>
      <PageHeader>
        <Header title="Noun | Nouns Center" />
        <Title title="Noun" />

        <Subheader body="So you need a Noun." />
      </PageHeader>

      <PageContent>
        <h1>Noun</h1>
      </PageContent>
    </>
  );
};

export default Noun;
