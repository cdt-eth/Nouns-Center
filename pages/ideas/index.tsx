import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

import IdeaCard from '../../components/ideas/IdeaCard';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';

import { getIdeas } from '../../lib/db/hasura';
import { getAddressFromContext } from '../../lib/utils';
import { signUser } from '../../lib/signUser';

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSigner, useConnect } from 'wagmi';

export async function getServerSideProps(context) {
  let address = await getAddressFromContext(context);
  if (!address) address = '';
  const ideaData = await getIdeas(address);
  const { ideas, ideas_likes } = ideaData;

  return {
    props: {
      ideas,
      ideas_likes,
    },
  };
}

const Ideas = ({ ideas, ideas_likes }) => {
  const { status } = useConnect();
  const { data: accountData } = useAccount();
  const { data: signer } = useSigner();
  const ideasLiked = ideas_likes.map((idea_liked) => {
    return idea_liked.idea_id;
  });

  useEffect(() => {
    const doLogout = async () => {
      await fetch('/api/logout');
    };
    const doHandleSubmitIdea = async () => {
      await signUser(accountData, signer);
    };

    if (status == 'connected') {
      //   doHandleSubmitIdea();
    }
    if (status == 'disconnected') {
      doLogout();
    }
  }, [status, accountData, signer]);

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <div>
          <div>
            <div className="flex justify-between">
              <div className="self-end">
                <ConnectButton showBalance={false} />
              </div>
              <Link href={'/ideas/create'}>
                <a className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white  bg-blue-base focus:ring-gray-200 hover:bg-opacity-80 dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  Submit Your Idea
                </a>
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 gap-x-6">
              {ideas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  id={idea.id}
                  title={idea.title}
                  tldr={idea.tldr}
                  submittedBy={idea.address}
                  date={idea.created_at}
                  liked={ideasLiked.includes(idea.id)}
                  votes={idea.ideas_liked_aggregate.aggregate.count}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Ideas;
