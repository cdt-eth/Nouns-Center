import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';

import { NotionRenderer } from 'react-notion';
import Subheader from '../components/Subheader';
import PageHeader from '../components/Layout/PageHeader';
import PageContent from '../components/Layout/PageContent';
import Button from '../components/common/Button';

const twentytwoOnboardingNotionPage = '5d9bc001ab1c457f9f0c4910be72622d';

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${twentytwoOnboardingNotionPage}`,
  ).then(res => res.json());

  return {
    props: {
      onboardData: data,
    },
  };
}

const Nouners = ({ onboardData }) => {
  return (
    <>
      <PageHeader>
        <Header title="Nouners | Nouns Center" />
        <Title title="Nouners" />

        <Subheader
          title="So you bought a Noun, now what?"
          body="Here's a high-level overview, written by Noun 22, of everything you need to know directly about acquiring a Noun. First things first, click that button and follow the instructions to verify your role as a Nouner."
        />
        <Button
          text="Collabland Join"
          link="https://discord.com/channels/849745721544146955/974425425239494747"
        />
      </PageHeader>

      <PageContent>
        <div className=" introNouns nouners">
          <NotionRenderer blockMap={onboardData} />
        </div>
      </PageContent>
    </>
  );
};

export default Nouners;
