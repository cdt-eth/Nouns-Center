import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import clsx from 'classnames';

import Header from '../../components/Header';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import Title from '../../components/Title';
import { getIdea } from '../../lib/db/hasura';
import { truncateEthAddress } from '../../lib/utils';
import { useMe } from '../../lib/hooks/useMe';
import { signUser } from '../../lib/signUser';

import { useEnsName } from 'wagmi';

import Heart from '../../components/icons/heart-icon';
import WalletButton from '../../components/WalletButton/WalletButton';
import { useAccount, useSigner } from 'wagmi';

export async function getServerSideProps(context) {
  const ideaId = context.params.ideaId;
  const ideas = await getIdea(ideaId);
  if (!ideas.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      idea: ideas[0],
    },
  };
}
const Idea = ({ idea }) => {
  const { id, title, description, address } = idea;
  const { data: ensName } = useEnsName({ address: address });
  const [isLiked, setIsLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(idea?.ideas_liked?.length || 0);

  const { address: connectedAddress, isDisconnected } = useAccount();
  const { user, mutate: userMutate } = useMe(address);
  const { data: signer } = useSigner();

  useEffect(() => {
    if (isDisconnected) {
      setIsLiked(false);
      userMutate();
    }
  }, [isDisconnected, userMutate]);

  useEffect(() => {
    if (connectedAddress && idea?.ideas_liked?.length) {
      let found = idea.ideas_liked.find(like => {
        return like.address.toLowerCase() == connectedAddress.toLowerCase();
      });

      if (found) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, [idea, connectedAddress]);

  const runLikesService = async (val: boolean) => {
    return await fetch('/api/likes', {
      method: 'POST',
      body: JSON.stringify({
        liked: val,
        ideaId: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleToggleHeart = async () => {
    if (isDisconnected) return;
    if (!user?.loggedIn) {
      await signUser(connectedAddress, signer);
      userMutate();
    }
    const val = !isLiked;
    let currVoteCount = voteCount;
    setVoteCount(val ? voteCount + 1 : voteCount - 1);
    setIsLiked(val);
    const response = await runLikesService(val);
    if (response.status == 403) {
      setVoteCount(currVoteCount);
      setIsLiked(isLiked);
    }
  };

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <div className="flex mb-5">
          <Link href={`/ideas`}>
            <a className="inline-flex cursor-pointer items-center font-medium transition rounded-md text-blue-500 hover:text-gray-700 underline">
              Go back
            </a>
          </Link>
          <div className="ml-10">
            <WalletButton showBalance={false} />
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg ideaCard">
          <div className="flex">
            <div
              className={clsx(
                'flex flex-col items-center cursor-pointer text-nouns-dark-grey hover:text-gray-300 transition p-5',
              )}
            >
              <button onClick={handleToggleHeart}>
                <Heart selected={isLiked} />
              </button>
              <div className="text-xs">{voteCount}</div>
            </div>

            <div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-nouns text-2xl leading-6 font-medium text-gray-900">{title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  [Idea #{id}] Submitted by: {ensName ? ensName : truncateEthAddress(address)}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:gap-4 sm:px-6">
                <dt className="text-nouns text-lg pb-3 font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  <ReactMarkdown className="text-lg">{description}</ReactMarkdown>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Idea;
