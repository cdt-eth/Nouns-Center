/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Subheader from '../components/Subheader';
import Podcasts from '../components/Podcasts';
import PageHeader from '../components/Layout/PageHeader';
import PageContent from '../components/Layout/PageContent';
import Button from '../components/common/Button';

const Podcast = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <PageHeader>
        <Header title="Podcast | Nouns Center" />
        <Title title="Podcast" />

        <Subheader
          title="Noun O' Talk: weekly podcast over Twitter Spaces"
          body="The host, Christian, interviews people in the NounsDAO community. From project builders to Noun owners, we hear about how they came to Nouns and what they love about the project."
        />
        <Button link="https://pod.link/1615472873" text="Listen to all episodes" />
      </PageHeader>

      <PageContent>
        <Podcasts />
      </PageContent>
    </>
  );
};

export default Podcast;
