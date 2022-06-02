import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/Layout/PageContent";
import PageHeader from "../../components/Layout/PageHeader";
import TextContent from "../../components/Layout/TextContent";
import Link from "../../components/Link";
import Table from "../../components/nouners/Table";
import Subheader from "../../components/Subheader";
import Title from "../../components/Title";

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

const smallgrants = ({ grantsData }) => {
  console.log("grants", grantsData);
  return grantsData ? (
    <>
      <PageHeader>
        <Header title="Small Grants | Nouns Center" />
        <Title title="Funding: Small Grants" />
      </PageHeader>

      <PageContent>
        <TextContent title="Overview">
          <p>
            The Small Grants Committee was created by{" "}
            <Link
              text="Nouns proposal 13"
              url="https://nouns.wtf/vote/13"
              leavesPage={true}
            />
            . It&apos;s run by a group of Nouners to be a &quot;flexible pool of
            capital&quot; that can be deployed when either the project is time
            sensitive, the ask is too small for an official proposal, or
            retroactive funding is merited because the work is already done. If
            you have questions you can ask in the{" "}
            <Link
              text="#grants-and-retro-funding"
              url="https://discord.com/channels/849745721544146955/903077530502828092"
              leavesPage={true}
            />{" "}
            channel in the{" "}
            <Link
              text="Nouns Discord"
              url="https://discord.com/invite/nouns"
              leavesPage={true}
            />
            .
          </p>
        </TextContent>
        <TextContent title="Small Grant vs. retro funding">
          <p>
            <b>Small Grant: </b> <em>upfront payment</em> to fund a project
            <br />
            <b>Retroactive Funding: </b>
            payment for <em>work already completed</em>
          </p>
        </TextContent>

        <TextContent title="Requesting a grant">
          <p>
            Open a post on{" "}
            <Link
              text="Discourse"
              url="https://discourse.nouns.wtf/"
              leavesPage={true}
            />{" "}
            and prefix the title with <b>&quot;Small Grants: &quot;</b> for
            visibility. From there a committee member will reach out to you, but
            you can also post the link to your Discourse post in the{" "}
            <Link
              text="#grants-and-retro-funding"
              url="https://discord.com/channels/849745721544146955/903077530502828092"
              leavesPage={true}
            />{" "}
            channel in the{" "}
            <Link
              text="Nouns Discord"
              url="https://discord.com/invite/nouns"
              leavesPage={true}
            />{" "}
            to get it on their radar.
          </p>
          <br />
          <p> Please outline:</p>
          <ul className="list-disc list-inside pb-4">
            <li className="ml-6">What is the project</li>
            <li className="ml-6">
              How it will proliferate Nouns (or already has)
            </li>
            <li className="ml-6">
              How much upfront funding you want, if the projects completed the
              committee will decide on if/how much retro funds are given
            </li>
          </ul>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="border-2 mt-3 rounded-xl p-2 bg-white shadow-md"
            src="/funding/discourseSG.png"
            alt="discourse"
          />
        </TextContent>

        <TextContent title="What's been funded?">
          <Table grants={grantsData} />
        </TextContent>
      </PageContent>
    </>
  ) : (
    <></>
  );
};

export default smallgrants;
