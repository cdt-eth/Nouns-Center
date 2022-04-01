/* eslint-disable @next/next/no-img-element */
import React from "react";

const Grid = () => {
  const resources = [
    {
      name: "Nouns Protocol",
      imageUrl: "protocol.png",
      bio: "Suite of smart contracts that generates and auctions a Noun every day. The protocol serves as an open standard for generative art - Nouns.",
      url: "https://nouns.notion.site/Noun-Protocol-32e4f0bf74fe433e927e2ea35e52a507",
      btnText: "Read More",
    },
    {
      name: "Github Org",
      imageUrl: "github.png",
      bio: "Official GitHub of the Nouns Foundation.",
      url: "https://nouns.notion.site/Noun-Protocol-32e4f0bf74fe433e927e2ea35e52a507",
      btnText: "Read More",
    },
    {
      name: "Smart Contract Architecture",
      imageUrl: "smartcontract.png",
      bio: "NounsToken, NounsSeeder, NounsDescriptor, NounsAuctionHouse, NounsDAOExecutor, NounsDAOProxy, and NounsDAOLogicV1.",
      url: "https://nouns.notion.site/Smart-contract-architecture-eb6e3e2c9c5f49feb09b5bad26a6001c",
      btnText: "Read More",
    },
    {
      name: "Generate a random Noun on-chain",
      imageUrl: "generate.png",
      bio: "Explore how to generate a pseudo-random noun, fully on-chain, with just two contract calls.",
      url: "https://nouns.notion.site/Noun-Protocol-32e4f0bf74fe433e927e2ea35e52a507",
      btnText: "Read More",
    },
    {
      name: "The Noun Crystal Ball",
      imageUrl: "crystal.png",
      bio: "what a Noun looks like is based on its Noun ID and the block before an auction was settled we can peer into our crystal ball and predict what the next noun would be.",
      url: "https://nouns.notion.site/Noun-Protocol-32e4f0bf74fe433e927e2ea35e52a507",
      btnText: "Read More",
    },
    {
      name: "Dev FAQ",
      imageUrl: "discussions.png",
      bio: "Ask technical questions you're wondering about, share ideas, or engage with other community members.",
      url: "https://github.com/nounsDAO/nouns-monorepo/discussions",
      btnText: "Read More",
    },
  ];

  return (
    <div className="bg-white text-black rounded-lg">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="devGrid">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 grid xs:grid-rows-1 sm:grid-rows-3  sm:grid-flow-col gap-4"
          >
            {resources.map((resource) => (
              <li key={resource.name} className="sm:py-8">
                <h3 className="text-nouns leading-6 font-medium text-3xl mb-6">
                  {resource.name}
                </h3>

                <div className="w-full flex gap-6 xs:flex-col sm:flex-row">
                  <img
                    className="object-cover shadow-lg rounded-lg sm:max-w-md  sm:h-52"
                    src={`/dev/${resource.imageUrl}`}
                    alt=""
                  />
                </div>

                <div className="mt-4">
                  <div className="text-base">
                    <p className="text-gray-500">{resource.bio}</p>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex capitalize items-center justify-center rounded-md border border-transparent bg-nouns-bg-blue px-3 py-1 mt-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition duration-100 focus:outline-none focus:ring-2 focus:ring-nouns-bg-blue focus:ring-offset-2 sm:w-auto"
                  >
                    {resource.btnText}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
