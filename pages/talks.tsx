import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import talks from "./api/talks.json";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  LinkIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { FaTwitter as TwitterIcon } from "react-icons/fa";

const Talks = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="mb-14">
      <Header title="Talks | Nouns Center" />
      <Title title="Talks" />

      <div className="rounded-lg text-black bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid xs:grid-cols-1 sm:grid-cols-2 sm:gap-px">
        {
          talks.map((talk, actionIdx) => (
            // talk.image !== "" && (
            <div
              key={talk.topic}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === talks.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === talks.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "relative group  transition duration-150 bg-white p-6 "

                // focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500
              )}
            >
              <div className="flex xs:gap-5 sm:gap-10 xs:flex-col sm:flex-row">
                <div className="flex flex-col items-center gap-2">
                  <div className="border-black border w-44 h-44 rounded-lg overflow-hidden shadow-md">
                    <a href={talk.link} target="_blank">
                      <img src={`talks/${talk.image}`} alt="" />
                    </a>
                  </div>

                  <a
                    className="cursor-pointer flex items-center gap-1 hover:text-blue-500"
                    href={talk.link}
                  >
                    <p>Listen</p>
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </a>
                </div>

                <div className="w-full flex flex-col ">
                  <div className="mb-4 xs:text-center sm:text-left">
                    <h3 className="text-lg font-medium">
                      <p className="text-nouns xs:text-xl sm:text-lg">
                        {/* Extend touch target to entire panel */}
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        {talk.topic}
                      </p>
                    </h3>
                    <p className="text-xs text-gray-500 italic">{talk.date}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-start pb-1">
                      <p className="mt-2 text-sm font-bold text-gray-500 xs:w-2/3">
                        Guests
                      </p>
                      <p className="mt-2 text-sm font-bold text-gray-500 xs:w-1/3">
                        View Project
                      </p>
                    </div>

                    {talk.guests.map((guest) => (
                      <div className="flex mb-1 justify-start">
                        <a
                          className="flex items-center  cursor-pointer gap-1 xs:w-2/3"
                          href={`https://twitter.com/${guest.handle}`}
                          target="_blank"
                        >
                          <span className="text-sm font-medium hover:text-blue-900 text-blue-600">
                            {guest.name}
                          </span>
                        </a>

                        <a
                          className="xs:w-1/3 hover:text-blue-600 justify-start sm:w-6"
                          href={guest.project}
                          target="_blank"
                        >
                          <LinkIcon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
          // )
        }
      </div>
    </div>
  );
};

export default Talks;
