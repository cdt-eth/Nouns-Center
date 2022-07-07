import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

import IdeaCard from '../../components/ideas/IdeaCard';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';

import { getIdeas } from '../../lib/db/hasura';
import { getAddressFromContext } from '../../lib/utils';

import '@rainbow-me/rainbowkit/styles.css';

import WalletButton from '../../components/WalletButton/WalletButton';

import { useAccount } from 'wagmi';

export async function getServerSideProps(context) {
  let address = await getAddressFromContext(context);
  if (!address) address = '';
  const { ideas = [], ideas_likes = [] } = { ...(await getIdeas(address)) };

  return {
    props: {
      ideas,
      ideas_likes,
    },
  };
}

const Ideas = ({ ideas, ideas_likes }) => {
  const { address } = useAccount();
  const ideasLikedByIdeaId = ideas_likes.map((idea_liked) => {
    return idea_liked.idea_id;
  });

  const [ideasLiked, setIdeasLiked] = useState<number[]>(ideasLikedByIdeaId);

  useEffect(() => {
    const getIdeaLikes = async () => {
      const likesByAddressResp = await fetch(
        `/api/likes_by_address?address=${address}`
      );
      const likesByAddress = await likesByAddressResp.json();
      if (likesByAddress?.data?.length) {
        setIdeasLiked(likesByAddress.data);
      }
    };

    if (address) {
      getIdeaLikes();
    }
  }, [address]);

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
                <WalletButton showBalance={false} />
              </div>
              <Link href={'/ideas/create'}>
                <a className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white  bg-blue-base focus:ring-gray-200 hover:bg-opacity-80 dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  Submit Your Idea
                </a>
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 gap-x-6">
              {ideas?.length ? (
                ideas.map((idea) => (
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
                ))
              ) : (
                <Link passHref href={'/ideas/create'}>
                  <button
                    type="button"
                    className="mt-4 relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                      />
                    </svg>
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Create a new idea
                    </span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Ideas;
