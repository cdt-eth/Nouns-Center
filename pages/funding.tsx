import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";

import Table from "../components/nouners/Table";

/*
 * Proposals for which data won't be calculated
 *
 * Set the proposals where DAO staked ETH in Lido, for example
 */
const excludedProposals = [13, 18, 22, 30, 31, 43, 44, 49, 52, 85];

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
const funding = [
  {
    source: "Small Grants",
    range: "0.1 - 10",
    totalEth: 167,
    recipients: 84,
    recipientType: "projects",
    distributed: "given to",
    link: "https://discord.com/channels/849745721544146955/903077530502828092",
    linkText: "Request a grant",
    tagline:
      "Creators who have either been given a grant from NounsDAO or received retroactive funding for proliferating Nouns.",
    textColor: "text-[#028940]",
    bgColor: "bg-[#028940]",
  },
  {
    source: "Prop House",
    range: "2 - 10",
    totalEth: 49,
    recipients: 12,
    recipientType: "winners",
    distributed: "awarded to ",
    link: "https://prop.house/",
    linkText: "Submit prop",
    tagline:
      "Submit proposals to prop.house. Each round has a specified ETH amount, and the community votes on who wins.",
    textColor: "text-blue-base",
    bgColor: "bg-blue-base",
  },
  {
    source: "Proposals",
    range: "10 - 600",
    totalEth: 3330,
    recipients: 67,
    recipientType: "props",
    distributed: "across",
    link: "https://nouns.wtf/vote",
    linkText: "Learn more",
    tagline:
      "Resources allocated for the long-term growth of the Nouns project. Larger in scope and undergo more scruntiny.",
    textColor: "text-[#FD8B5B]",
    bgColor: "bg-[#FD8B5B]",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Funding = ({ grantsData }) => {
  const [totalProposalEthSpent, setTotalProposalEthSpent] = useState(undefined);
  const [totalProposals, setTotalProposals] = useState(undefined);

  async function getEthSpentOnProposals() {
    let totalSpent = 0;

    const data = await axios({
      url: "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
          query{
            proposals(orderBy: startBlock, orderDirection: asc) {
              id
              values
              status
            }
          }`,
      },
    });

    const props = data.data.data.proposals;

    props.forEach((prop) => {
      if (
        !excludedProposals.includes(parseInt(prop.id)) &&
        prop.status === "EXECUTED"
      ) {
        prop.values.forEach((value) => {
          totalSpent =
            totalSpent + parseFloat(formatUnits(BigNumber.from(value)));
        });
      }
    });

    // filter passed props
    const executedProps = props.filter((prop) => prop.status === "EXECUTED");
    // subtract excluded, passed props
    setTotalProposals(executedProps.length - excludedProposals.length);

    // Round the number for better look
    totalSpent = Math.round(totalSpent);

    setTotalProposalEthSpent(totalSpent);

    return totalSpent;
  }

  useEffect(() => {
    getEthSpentOnProposals();
  }, []);

  // return grantsData ? (
  return (
    <>
      <PageHeader>
        <Header title="Funding | Nouns Center" />
        <Title title="Funding" />

        <Subheader body="Looking to get funding for a Nounish project? There are many ways to go about doing so!" />
      </PageHeader>

      <PageContent>
        <>
          {/* <Table grants={grantsData} /> */}

          <div>
            <dl className="mt-5 grid grid-cols-1 flex-col rounded-xl overflow-hidden sm:shadow-none md:grid-cols-3 xs:gap-8 sm:gap-4">
              {funding.map((item) => (
                <div
                  key={item.recipients}
                  className="relative bg-white py-5 px-4 pb-16 sm:pt-6 sm:px-5 xs:shadow-sm sm:shadow-none xs:rounded-lg  overflow-hidden sm:divide-x divide-white "
                >
                  <dt
                    className={`text-nouns text-2xl tracking-wide pb-4 ${item.textColor}`}
                  >
                    {item.source}
                  </dt>

                  <dd className="mt-1 flex flex-col justify-between items-baseline md:block lg:flex font-extrabold">
                    <div className="items-baseline text-4xl font-semibold">
                      {item.range}Ξ{" "}
                    </div>

                    <div className="pt-3 text-sm flex flex-col gap-1">
                      <div>
                        •{" "}
                        <span
                          className={`${item.bgColor} text-white px-1 py-px rounded-md`}
                        >
                          {item.source === "Proposals"
                            ? totalProposals && totalProposals
                            : item.recipients}{" "}
                          {item.recipientType}
                        </span>{" "}
                        funded
                      </div>
                      <div>
                        • {/*Total spent:{" "} */}
                        <span
                          className={`${item.bgColor} text-white px-1 py-px rounded-md`}
                        >
                          {item.source === "Proposals"
                            ? totalProposalEthSpent &&
                              totalProposalEthSpent.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })
                            : item.totalEth.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}
                          {/* Ξ */} eth
                        </span>{" "}
                        spent
                      </div>
                      <span className="font-normal text-black pt-4">
                        {item.tagline}
                      </span>{" "}
                    </div>
                  </dd>

                  <div
                    className={`absolute hover:bg-opacity-80 transition cursor-pointer bottom-0 inset-x-0
                     rounded-b-xl ${item.bgColor} px-4 py-3 sm:px-5`}
                  >
                    <div className="text-sm ">
                      <a href={item.link} className="font-medium text-white">
                        {" "}
                        {item.linkText} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </>
      </PageContent>
    </>
    // ) : (
    //   <></>
  );
};

export default Funding;
