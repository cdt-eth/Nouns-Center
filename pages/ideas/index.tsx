import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

import IdeaCard from '../../components/ideas/IdeaCard';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';

import { getIdeas } from '../../lib/db/hasura';
import { getAddressFromContext } from '../../lib/utils';
// import { signUser } from '../../lib/signUser';

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export async function getServerSideProps(context) {
  let address = await getAddressFromContext(context);
  if (!address) address = '';
  const ideaData = await getIdeas(address);
  const { ideas = [], ideas_likes = [] } = ideaData;

  return {
    props: {
      ideas,
      ideas_likes,
    },
  };
}

const Ideas = ({ ideas, ideas_likes }) => {
  const { data: accountData } = useAccount();
  const ideasLikedByIdeaId = ideas_likes.map((idea_liked) => {
    return idea_liked.idea_id;
  });

  const [ideasLiked, setIdeasLiked] = useState<number[]>(ideasLikedByIdeaId);

  useEffect(() => {
    const getIdeaLikes = async () => {
      const likesByAddressResp = await fetch(
        `/api/likes_by_address?address=${accountData.address}`
      );
      const likesByAddress = await likesByAddressResp.json();
      if (likesByAddress?.data?.length) {
        setIdeasLiked(likesByAddress.data);
      }
    };

    if (accountData?.address) {
      getIdeaLikes();
    }
  }, [accountData]);

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
