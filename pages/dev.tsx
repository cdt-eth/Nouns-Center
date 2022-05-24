import React from "react";
import Grid from "../components/Dev/Grid";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const Dev = () => {
  return (
    <>
      <PageHeader>
        <Header title="Dev | Nouns Center" />
        <Title title="Dev" />

        <Subheader body="You'll find a list of technical resources & docs about working with Nouns as well as a link to our Github repos. If there's a question you have feel free to click the button and submit via Github Discussions." />
      </PageHeader>

      <PageContent>
        <Grid />
      </PageContent>
    </>
  );
};

export default Dev;
