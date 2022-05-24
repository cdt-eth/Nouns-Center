import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Timeline from "../components/Timeline/Timeline";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";

const History = () => {
  return (
    <>
      <PageHeader>
        <Header title="History | Nouns Center" />
        <Title title="History" />

        <SubheaderBodyButton
          title="Moments &#38; Milestones"
          body="A timeline of Nouns DAO's major milestones and noteworthy moments that have happened since the project's inception. Click the button to suggest an event that should be added."
          btnLink="https://addressform.io/form/51d8355f-5cb7-476a-ae98-dec2ab50ba79"
          btnText="What's missing?"
        />
      </PageHeader>

      <PageContent>
        <Timeline />
      </PageContent>
    </>
  );
};

export default History;
