import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import clsx from 'classnames';
import { useAccount, useSigner } from 'wagmi';

import Header from '../../components/Header';
import IdeaCard from '../../components/ideas/IdeaCard';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';

import { useMe } from '../../lib/hooks/useMe';
import { getIdeas } from '../../lib/db/hasura';
import { getAddressFromContext } from '../../lib/utils';
import { signUser } from '../../lib/signUser';
import { IDEA_HIDDEN } from '../../lib/constants';

import WalletButton from '../../components/WalletButton/WalletButton';

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
  const { address, isDisconnected } = useAccount();
  const { data: signer } = useSigner();

  const { user, mutate: userMutate } = useMe(address);

  const ideasLikedByIdeaId = ideas_likes.map((idea_liked) => {
    return idea_liked.idea_id;
  });

  const [ideasLiked, setIdeasLiked] = useState<number[]>(ideasLikedByIdeaId);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [ideaList, setIdeas] = useState<any[]>(ideas);

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
    } else {
      userMutate();
    }
  }, [address, userMutate]);

  useEffect(() => {
    const doLogout = async () => {
      userMutate();
      setIdeasLiked([]);
    };
    if (isDisconnected) {
      doLogout();
    }
  }, [isDisconnected, userMutate]);

  const authUser = async () => {
    await signUser(address, signer);
    userMutate();
  };

  const hideIdea = async (ideaId) => {
    const hideIdeaResp = await fetch('/api/ideas_state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ideaId, state: IDEA_HIDDEN }),
    });
    const hideIdeaData = await hideIdeaResp.json();
    if (hideIdeaData?.success) {
      const removeIndex = ideaList.map((idea) => idea.id).indexOf(ideaId);
      const tIdeas = ideaList.filter((el, idx) => idx != removeIndex);
      setIdeas(tIdeas);
    }
  };

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <div>
          <div>
            <div className="flex">
              <div className="self-end">
                <WalletButton showBalance={false} />
              </div>
              <div className="ml-auto mr-2">
                <button
                  onClick={authUser}
                  className={clsx(
                    'inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white  bg-blue-base focus:ring-gray-200 hover:bg-opacity-80 dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto',
                    { hidden: !address || user?.loggedIn }
                  )}
                >
                  Sign to Auth
                </button>
              </div>
              <Link href={'/ideas/create'}>
                <a className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white  bg-blue-base focus:ring-gray-200 hover:bg-opacity-80 dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  Submit Your Idea
                </a>
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 gap-x-6">
              {ideaList?.length ? (
                ideaList.map((idea) => (
                  <IdeaCard
                    key={idea.id}
                    id={idea.id}
                    title={idea.title}
                    tldr={idea.tldr}
                    submittedBy={idea.address}
                    date={idea.created_at}
                    liked={ideasLiked.includes(idea.id)}
                    votes={idea.ideas_liked_aggregate.aggregate.count}
                    isAdmin={user?.admin}
                    hideIdea={() => hideIdea(idea.id)}
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
                      height="48"
                      width="48"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path d="m44.35 19.65-1.15-2.5L40.7 16l2.5-1.15 1.15-2.5 1.15 2.5L48 16l-2.5 1.15ZM38 10.9l-1.75-3.7-3.7-1.75 3.7-1.75L38 0l1.75 3.7 3.7 1.75-3.7 1.75ZM18 44q-1.7 0-2.875-1.175T13.95 39.95h8.1q0 1.7-1.175 2.875T18 44Zm-8.1-7.15v-3h16.2v3Zm.25-6.05q-3.3-2.15-5.225-5.375Q3 22.2 3 18.15q0-6.1 4.45-10.55Q11.9 3.15 18 3.15q6.1 0 10.55 4.45Q33 12.05 33 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Zm1.1-3H24.8q2.4-1.6 3.8-4.15 1.4-2.55 1.4-5.5 0-4.95-3.525-8.475Q22.95 6.15 18 6.15q-4.95 0-8.475 3.525Q6 13.2 6 18.15q0 2.95 1.4 5.5t3.85 4.15Zm6.75 0Z" />
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
