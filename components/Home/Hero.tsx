/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex justify-around  tracking-wider ">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className=" mx-auto max-w-7xl px-4 sm:mt-24 tracking-wider">
          <div className="text-center">
            <h1 className="text-4xl text-white font-extrabold sm:text-5xl md:text-6xl text-nouns tracking-wider flex gap-4 justify-center">
              <div className="flex xs:flex-col-reverse	 sm:flex-row items-center gap-4">
                <div>
                  <span className="block xl:inline">Home to all things</span>{" "}
                  <span className="block text-nouns-bg-blue xl:inline">
                    Nounish
                  </span>
                </div>
                <img
                  className="xs:w-20 sm:w-12 xs:h-20 sm:h-12 "
                  src="earth-full.gif"
                  alt="earth"
                />
              </div>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Nouns Center is the community site for Nouns DAO projects &#38;
              tools. Want to get invovled? Looking for the assets? Hoping to
              connect with other talented folks in the DAO? You&apos;ll find
              answers to everything here.
            </p>
            <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link passHref href="/projects">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transition duration-150  bg-nouns-bg-blue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    View Projects
                  </span>
                </Link>
              </div>

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link passHref href="/funding">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-nouns-bg-blue bg-white transition duration-150 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
                    Get Funding{" "}
                  </span>
                </Link>
              </div>

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link passHref href="/history">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  text-white transition duration-150  bg-nouns-bg-blue hover:bg-indigo-700  md:py-4 md:text-lg md:px-10">
                    Learn the History{" "}
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link passHref href="/faq">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition duration-150 hover:bg-gray-300  text-nouns-bg-blue bg-white  md:py-4 md:text-lg md:px-10">
                    Find Answers
                  </span>
                </Link>
              </div>

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link passHref href="/assets">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-nouns-bg-blue   hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Download Assets
                  </span>
                </Link>
              </div>

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link passHref href="/talent">
                  <span className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition duration-150 hover:bg-gray-300  text-nouns-bg-blue bg-white  md:py-4 md:text-lg md:px-10">
                    Connect with Others
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
