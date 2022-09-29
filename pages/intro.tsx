import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Title from '../components/Title';
import { NotionRenderer } from 'react-notion';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';
import Button from '../components/common/Button';

const introToNounsNotionPage = '90485892d0c54ef1be05abf0ecfc18da';

export async function getStaticProps() {
  let data = [];

  let error = '';

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${introToNounsNotionPage}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String('No data was found!');
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
    <>
      <PageHeader>
        <Header title="Intro | Nouns Center" />
        <Title title="Intro" />

        <Subheader
          title="A Brief Introduction to Nouns"
          body="If you ever wanted to know what Nouns is all about, this is a great place to start."
        />
      </PageHeader>

      <PageContent>
        <div className="introNouns">
          <NotionRenderer blockMap={docsData} />
        </div>
      </PageContent>
    </>
  ) : (
    <></>
  );
};
export default Intro;
