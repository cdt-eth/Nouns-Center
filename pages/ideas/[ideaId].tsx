import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import Header from '../../components/Header';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import Title from '../../components/Title';
import { getIdea } from '../../lib/db/hasura';
import { truncateEthAddress } from '../../lib/utils';

import { useEnsName } from 'wagmi';

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
  const { id, title, tldr, description, address } = idea;
  const { data: ensName } = useEnsName({ address: address });

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <Link href={`/ideas`}>
          <a className="inline-flex cursor-pointer items-center font-medium transition rounded-md text-blue-500 hover:text-gray-700 underline">
            Go back
          </a>
        </Link>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              [Idea #{id}] Submitted by:{' '}
              {ensName ? ensName : truncateEthAddress(address)}
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">tldr</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {tldr}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ReactMarkdown className="mt-5 text-2xl">
                    {description}
                  </ReactMarkdown>
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
