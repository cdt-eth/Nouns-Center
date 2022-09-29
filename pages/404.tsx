/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Dino from '../components/Dino';
import Header from '../components/Header';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';
import Title from '../components/Title';

const Custom404 = () => {
  return (
    <>
      <PageHeader>
        <Header title="404 | Nouns Center" />
        <Title title="404: Page Not Found" />
      </PageHeader>

      <PageContent>
        <span className="xs:hidden sm:block">
          <Dino />
        </span>
        <img className="sm:hidden" src="/dino/error.png" alt="dino" />
      </PageContent>
    </>
  );
};

export default Custom404;
