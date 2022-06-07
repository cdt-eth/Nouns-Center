/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/Layout/PageContent";
import PageHeader from "../../components/Layout/PageHeader";
import TextContent from "../../components/Layout/TextContent";
import Link from "../../components/Link";
import Subheader from "../../components/Subheader";
import Title from "../../components/Title";

const prophouse = () => {
  return (
    <>
      <PageHeader>
        <Header title="Prop House | Nouns Center" />
        <Title title="Funding: Prop House" />

        <Subheader
          title="For projects needing 2-10Ξ"
          body="Submit proposals to weekly funding rounds. Each round has a specified ETH amount, and the community votes on who wins."
        />
      </PageHeader>

      <PageContent>
        <img
          src="/funding/phm.png"
          className="fit-content rounded-xl sm:hidden"
          alt="timeline"
        />

        <img
          src="/funding/ph.png"
          className="fit-content rounded-xl xs:hidden sm:flex"
          alt="timeline"
        />

        <TextContent title="Overview">
          <p>
            In{" "}
            <Link
              text="Prop House"
              url="https://prop.house/"
              leavesPage={true}
            />
            , creators submit their <b>ideas as bids</b> to win{" "}
            <b>auctions of ETH</b>. Each funding round will specify the number
            of winners at a specific ETH amount. Anyone can submit their idea as
            a proposal. After the round is closed, community members vote on
            their favorite proposals to get funded.
          </p>

          <br />

          <p>Some examples of funding rounds:</p>
          <ul className="list-disc list-inside">
            <li className="ml-6">3 winners of 3Ξ</li>
            <li className="ml-6">2 winners of 5Ξ</li>
            <li className="ml-6">5 winners of 2Ξ</li>
            <li className="ml-6">1 winner of 10Ξ</li>
          </ul>
        </TextContent>

        <TextContent title="Process">
          <p>
            Let&apos;s take{" "}
            <Link
              text="Nouns Launchpad"
              url="https://prop.house/nouns-launchpad"
              leavesPage={true}
            />
            , the original auction house, as an example. When a new funding
            round is open you can connect your wallet and submit a proposal.
            You&apos;ll outline your idea&apos;s <b>Who, What, and Why</b>.
            After a week of submissions there will be a week of voting from
            community members (Noun holders and Nouns extension project
            holders). Then winners will be announced and ETH will be
            distributed, all up front.
          </p>
        </TextContent>

        <img
          src="/funding/phflow.png"
          className="fit-content rounded-xl shadow-lg"
          alt="ph"
        />

        <TextContent title="Houses">
          <p>
            Separate community prop <b>&quot;houses&quot;</b> have spun up in an
            attempt to decentralize the applicant pool and scale the amount of
            proposals receiving funding. This alternative mechanism to deploy
            capital will allow builders to{" "}
            <b>plug into their community&apos;s treasury</b> and ensure that the
            most amount of high-quality proposals rise to the top and have a
            chance to succeed. Learn more about community{" "}
            <Link
              text="houses"
              url="https://nouni.sh/8t35zq839c"
              leavesPage={true}
            />
            .
          </p>
        </TextContent>

        <img
          src="/funding/phouses.png"
          className="rounded-xl shadow-lg"
          alt="houses"
        />
      </PageContent>
    </>
  );
};

export default prophouse;
