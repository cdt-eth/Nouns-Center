import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import PageHeader from '../components/Layout/PageHeader';
import PageContent from '../components/Layout/PageContent';
import YoutubeVideo from '../components/YoutubeVideo';
import Subheader from '../components/Subheader';
import Button from '../components/common/Button';

const Learn = () => {
  return (
    <>
      <PageHeader>
        <Header title="Learn | Nouns Center" />
        <Title title="Learn" />

        <Subheader
          title="Tooling Calls"
          body="A weekly meeting inside of the Nouns Discord server where project founders demo & discuss web3 oriented tools with our community. Recorded VOD's of each demo are below."
        />
        <Button
          link="https://www.youtube.com/channel/UCsmsHn9aAaseHlRjXr7rgrg"
          text="Watch On YouTube"
        />
      </PageHeader>
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          <YoutubeVideo
            title="Utopia"
            description="Kaito from Utopia Labs presenting a demo of their product - Collaborative payroll and expense management for DAOs built on Gnosis."
            embedId="0UdrPat4vaw"
          />
          <YoutubeVideo
            title=" Vulcan Authentication"
            description="Adam from Vulcan Authentication presenting a demo of their product - The Safest Wallet Authentication Tool."
            embedId="UsqC15Q-vS0"
          />
          <YoutubeVideo
            title="Dework"
            description="Lonis from Dework.xyz presenting a demo of their product - Web3-native project management with token payments, credentialing, bounties."
            embedId="ZRgXjMB94ck"
          />
        </div>
      </PageContent>
    </>
  );
};

export default Learn;
