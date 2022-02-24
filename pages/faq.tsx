import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import "react-notion/src/styles.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

const rootNotionPageId = "e29fc3a92c4a44c98210f5142b751502"; // collection
// const rootNotionPageId = "903a92feada14e17a5cd393da1c96af9";

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${rootNotionPageId}`
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const FAQ = ({ blockMap }) => {
  return (
    <div>
      <Header title="FAQ | Nouns Center" />
      <Title title="FAQ" />

      {/* <h2>{postTitle}</h2> */}
      <div className="text-white">
        {/* <NotionRenderer blockMap={blockMap} /> */}
      </div>
    </div>
  );
};

export default FAQ;
