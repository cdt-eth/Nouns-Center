import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { Client } from "@notionhq/client";

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
  onboardData &&
    console.log(
      "onboardData",
      onboardData
      // [onboardData].map((o) => <>{o?.value?.properties?.title}</>)
    );

  // const notion = new Client({
  //   auth: "secret_qFrnOPkZkx094spJmiikJz3MDrIH10gNPzBY2BtIwpf",
  // });
  // const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // (async () => {
  //   const pageId = "b55c9c91-384d-452b-81db-d1ef79372b75";
  //   const response = await notion.pages.retrieve({ page_id: pageId });
  //   console.log("response", response);
  // })();

  return (
    <div>
      <Header title="Nouners | Nouns Center" />
      <Title title="Nouners" />
    </div>
  );
};

export default Nouners;
