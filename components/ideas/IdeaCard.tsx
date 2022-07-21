import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { truncateEthAddress } from "../../lib/utils";
import { signUser } from "../../lib/signUser";
import { useMe } from "../../lib/hooks/useMe";

import { useAccount, useSigner } from "wagmi";

import Heart from "../icons/heart-icon";

import { useEnsName } from "wagmi";
import Link from "next/link";

interface IdeaCardProps {
  id: number;
  title: string;
  description: string;
  submittedBy: string;
  date: string;
  votes: number;
  liked: boolean;
  isAdmin: boolean;
  hideIdea: () => void;
}

const IdeaCard = ({
  id,
  title,
  description,
  submittedBy,
  date,
  votes,
  liked,
  isAdmin,
  hideIdea,
}: IdeaCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [voteCount, setVoteCount] = useState(votes);

  const { data: ensName } = useEnsName({ address: submittedBy });
  const { address } = useAccount();
  const { user, mutate: userMutate } = useMe(address);

  const { data: signer } = useSigner();

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  const runLikesService = async (val: boolean) => {
    return await fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({
        liked: val,
        ideaId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleToggleHeart = async () => {
    let signResp;
    if (!user?.loggedIn) {
      signResp = await signUser(address, signer);
      if (signResp?.success) {
        userMutate();
      }
    }
    if (signResp?.success || user?.loggedIn) {
      const val = !isLiked;
      let currVoteCount = voteCount;
      setVoteCount(val ? voteCount + 1 : voteCount - 1);
      setIsLiked(val);
      const response = await runLikesService(val);
      if (response.status == 403) {
        setVoteCount(currVoteCount);
        setIsLiked(isLiked);
      }
    }
  };

  return (
    <div className="">
      <div className="mt-5">
        <div className="rounded-xl bg-gray-50 dark:bg-white px-6 py-5 min-h-[225px] sm:flex sm:items-start sm:justify-between flex-col ideaCard">
          <div className="sm:flex sm:items-start gap-2">
            <div className="flex flex-col items-start cursor-pointer text-nouns-dark-grey hover:text-gray-300 transition">
              <div className="flex items-center flex-col">
                <button onClick={handleToggleHeart}>
                  <Heart selected={isLiked} />
                </button>
                <div className="text-xs">{voteCount}</div>
              </div>
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-4">
              <ReactMarkdown className="text-lg text-nouns tracking-wide breakWords font-medium text-gray-900 leading-none">
                {title}
              </ReactMarkdown>

              <ReactMarkdown className="text-black pt-4 line-clamp-3 lineClamp breakWords">
                {description}
              </ReactMarkdown>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:flex-shrink-0 flex w-full justify-between">
            <div className="mt-1 text-sm text-gray-600 sm:flex flex-col">
              <div className="italic">
                By:{" "}
                <span className="">
                  {ensName ? ensName : truncateEthAddress(submittedBy)}
                </span>
              </div>

              <div className="mt-1 sm:mt-0">
                {new Date(date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="ml-auto mr-3 self-center">
              {isAdmin && (
                <button
                  onClick={hideIdea}
                  type="button"
                  className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Hide Idea
                </button>
              )}
            </div>

            <Link href={`/ideas/${id}`}>
              <a className="inline-flex cursor-pointer items-center font-medium transition rounded-md text-blue-500 hover:text-gray-700 underline">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
