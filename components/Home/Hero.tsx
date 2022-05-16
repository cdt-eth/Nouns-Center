/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ButtonGroup from "./ButtonGroup";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import NounishButton from "./NounishButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const searchClient = algoliasearch(
  "PGIH0KF5F5",
  "faf1987de1d83c02e82fbf9bfd7ca5a9"
);

// autocomplete({
//   container: "#autocomplete",
//   placeholder: "Search the Nouniverse",
// });
const action = () => {
  //on click action to pass to button
};

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-around tracking-wider pt-10">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className=" mx-auto  px-4 sm:mt-24 tracking-wider">
            <div className="text-center">
              <h1 className=" text-white  font-extrabold text-5xl md:text-6xl text-nouns tracking-wider flex gap-4 justify-center">
                What are you looking for?
              </h1>

              <p className="mt-3 max-w-md mx-auto text-base font-medium text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Nouns Center serves as the knowledge center &#38; resource hub
                for Nouns DAO
              </p>

              <div className="mt-6" id="autocomplete"></div>

              <div className="mt-5 mx-auto xs:grid grid-cols-2 xs:gap-3 sm:gap-0 sm:flex sm:justify-center md:mt-8">
                <NounishButton
                  text="View Projects"
                  buttonId={"one"}
                  buttonAction={action}
                  path="projects"
                />
                <NounishButton
                  text="Download Assets"
                  buttonId={"two"}
                  buttonAction={action}
                  path="assets"
                />
                <NounishButton
                  text="Get Funding"
                  buttonId={"three"}
                  buttonAction={action}
                  path="funding"
                />
                <NounishButton
                  text="Dev Resources"
                  buttonId={"four"}
                  buttonAction={action}
                  path="dev"
                />
                <NounishButton
                  text="History of Nouns"
                  buttonId={"five"}
                  buttonAction={action}
                  path="history"
                />
                <NounishButton
                  text="View Traits"
                  buttonId={"six"}
                  buttonAction={action}
                  path="traits"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;
