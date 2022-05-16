import React from "react";
import Header from "../components/Header";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import Title from "../components/Title";
import { NotionRenderer } from "react-notion";

const introToNounsNotionPage = "90485892d0c54ef1be05abf0ecfc18da";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/page/${introToNounsNotionPage}`
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
      docsData: data,
    },
  };
}

const Intro = ({ docsData }) => {
  return docsData ? (
    <div>
      <Header title="Intro | Nouns Center" />
      <Title title="Intro" />

      <SubheaderBodyButton
        title="A Brief Introduction to Nouns"
        body="If you ever wanted to know what Nouns is all about, this is a great place to start."
        btnLink="https://nouns.notion.site/Explore-Nouns-a2a9dceeb1d54e10b9cbf3f931c2266f"
        btnText="More info"
      />

      <div className={`bg-white introNouns rounded-lg px-10 py-4`}>
        <NotionRenderer blockMap={docsData} />
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Intro;
