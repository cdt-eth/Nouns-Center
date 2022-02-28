import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import talent from "./api/talent.json";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa";

const Talent = () => {
  const getRandomNoun = () => {
    const min = 0;
    const max = 224;

    const nounId = Math.floor(Math.random() * (max - min + 1) + min);

    return nounId;
  };

  return (
    <div>
      <Header title="Talent | Nouns Center" />
      <Title title="Talent" />

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {talent.map((person) => (
          <li
            key={person.skills}
            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 flex flex-col justify-between"
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 ">
                s
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium">
                    {person.twitter !== "" ? person.twitter : "-"}
                  </h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person.title}
                  </span>
                </div>
                {/* <p className="mt-1 text-gray-500 text-sm"> */}
                <p className="mt-1 text-gray-500 text-sm ">{person.skills}</p>
              </div>
              <img
                className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"
                src={`https://noun.pics/${getRandomNoun()}`}
                alt=""
              />
            </div>
            {(person.twitter || person.discord) && (
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  {person.twitter !== "" && (
                    <div className="w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150">
                      <a
                        href={`https://twitter.com/${person.twitter}`}
                        target="_blank"
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <TwitterIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Twitter</span>
                      </a>
                    </div>
                  )}

                  {/* <div className="-ml-px w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150"> */}
                  {person.discord !== "" && (
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        // href={`${person.discord}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg "
                      >
                        <DiscordIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">{person.discord}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Talent;
