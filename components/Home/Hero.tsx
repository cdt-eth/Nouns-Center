/* eslint-disable @next/next/no-img-element */
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import Footer from "../Footer";
import NavSection from "./NavSection";
import nav from "../../api/nav2.json";
import NavCard from "./NavCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const searchClient = algoliasearch(
//   "PGIH0KF5F5",
//   "faf1987de1d83c02e82fbf9bfd7ca5a9"
// );

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
      <div className="pt-10">
        <main className="mx-auto tracking-wider text-black xs:px-4">
          <div className="text-center flex flex-col justify-between h-full">
            <img
              className="m-auto mt-5 w-1/3 sm:w-52	 "
              src="/home/noggles.png"
              alt="noggles"
            />
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-[80px] text-nouns tracking-wider w-full xs:pt-6 sm:pt-12 xs:pb-3 sm:pb-6">
              Welcome to Nouns Center
            </h1>
            <p className="text-black m-auto font-semibold xs:text-[14px] sm:text-2xl text-center w-full sm:w-[800px]">
              The knowledge center &#38; resource hub for Nouns DAO. Learn about
              the project, the community and ways to get involved and funded.
            </p>

            {/* <div className="mt-6 sm:mb-14" id="autocomplete"></div> */}
          </div>

          {nav.map((section) => (
            <NavSection
              key={section.name}
              // @ts-ignore
              title={section.title}
              // @ts-ignore
              body={section.description}
              cards={section.children.map((page, i) => (
                <NavCard
                  path={page.link}
                  key={i}
                  text={page.name}
                  i={page.link}
                />
              ))}
            />
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
