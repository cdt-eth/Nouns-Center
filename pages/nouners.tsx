import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

import { NotionRenderer } from "react-notion";
import SubheaderBodyButton from "../components/SubheaderBodyButton";

const twentytwoOnboardingNotionPage = "5d9bc001ab1c457f9f0c4910be72622d";

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${twentytwoOnboardingNotionPage}`
  ).then((res) => res.json());

  return {
    props: {
      onboardData: data,
    },
  };
}

const Nouners = ({ onboardData }) => {
  return (
    <div>
      <Header title="Nouners | Nouns Center" />
      <Title title="Nouners" />

      <SubheaderBodyButton
        title="So you bought a Noun, now what?"
        body="Here's a high-level overview, written by Noun 22, of everything you need to know directly about acquiring a Noun. First things first, click that button and follow the instructions to verify your role as a Nouner."
        btnLink="https://discord.com/channels/849745721544146955/898686706667126794"
        btnText="Type !join in #verify"
      />

      <div className=" bg-[#ebebeb] introNouns nouners rounded-lg px-10 py-4">
        <NotionRenderer blockMap={onboardData} />
      </div>
    </div>
  );
};

export default Nouners;
