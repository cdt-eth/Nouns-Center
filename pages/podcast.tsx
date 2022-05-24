/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import Podcasts from "../components/Podcasts";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";

const Podcast = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <PageHeader>
        <Header title="Podcast | Nouns Center" />
        <Title title="Podcast" />

        <SubheaderBodyButton
          title="Noun O' Talk: weekly podcast over Twitter Spaces"
          body="The host, Christian, interviews people in the NounsDAO community. From project builders to Noun owners, we hear about how they came to Nouns and what they love about the project."
          btnLink="https://pod.link/1615472873"
          btnText="Listen to all episodes"
        />
      </PageHeader>

      <PageContent>
        <Podcasts />
      </PageContent>
    </>
  );
};

export default Podcast;
