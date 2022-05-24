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
        <div className="relative pb-16 sm:pb-24 ">
          <main className="mx-auto sm:px-4 tracking-wider text-black sm:text-white dark:text-white ">
            <div className="text-center flex flex-col justify-between h-full xs:px-6 sm:px-0">
              <h1 className=" font-extrabold text-5xl md:text-6xl text-nouns tracking-wider flex gap-4 justify-center">
                Welcome to Nouns Center
              </h1>

              <div className="mt-6 sm:mb-14" id="autocomplete"></div>

              <div className="mt-5 sm:mx-auto grid grid-cols-2 xs:gap-3 sm:gap-8 sm:justify-center md:mt-8 lg:grid-flow-col">
                <NounishButton
                  text="Intro to Nouns"
                  image="intro.png"
                  buttonId={"one"}
                  buttonAction={action}
                  path="intro"
                />
                <NounishButton
                  text="View Traits"
                  image="traits.png"
                  buttonId={"two"}
                  buttonAction={action}
                  path="traits"
                />
                <NounishButton
                  text="Get Funding"
                  image="funding.png"
                  buttonId={"three"}
                  buttonAction={action}
                  path="funding"
                />
                <NounishButton
                  text="Nounish Projects"
                  image="projects.jpeg"
                  buttonId={"four"}
                  buttonAction={action}
                  path="projects"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative text-black sm:text-white dark:text-white font-medium gap-2 items-center w-full flex flex-col text-center">
        <p>
          Nouns Center serves as the knowledge center &#38; resource hub for
          Nouns DAO
        </p>
        <div className="flex gap-8 items-center">
          {/* Twitter */}
          <a
            href="https://twitter.com/nounsdao"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-8 fill-black sm:fill-white dark:fill-white hover:fill-gray-400 transition cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>

          {/* Discord */}
          <a href="https://discord.gg/nouns" target="_blank" rel="noreferrer">
            <svg
              className="h-8 w-7 fill-black sm:fill-white dark:fill-white hover:fill-gray-400 transition cursor-pointer"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style type="text/css"></style>
              <g id="Layer_1" />
              <g id="Layer_2">
                <g>
                  <g>
                    <path
                      className="st89"
                      d="M85.22,24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122,1.282     c13.623,4.087,19.954,10.097,19.954,10.097c-19.491-10.731-44.317-10.654-64.59,0c0,0,6.571-6.331,20.996-10.418l-0.801-0.962     c0,0-10.899-0.24-22.438,8.334c0,0-11.54,20.755-11.54,46.319c0,0,6.732,11.54,24.442,12.101c0,0,2.965-3.526,5.369-6.571     c-10.177-3.045-14.024-9.376-14.024-9.376c6.394,4.001,12.859,6.505,20.916,8.094c13.108,2.698,29.413-0.076,41.591-8.094     c0,0-4.007,6.491-14.505,9.456c2.404,2.965,5.289,6.411,5.289,6.411c17.71-0.561,24.441-12.101,24.441-12.02     C96.759,45.713,85.22,24.958,85.22,24.958z M35.055,63.824c-4.488,0-8.174-3.927-8.174-8.815     c0.328-11.707,16.102-11.671,16.348,0C43.229,59.897,39.622,63.824,35.055,63.824z M64.304,63.824     c-4.488,0-8.174-3.927-8.174-8.815c0.36-11.684,15.937-11.689,16.348,0C72.478,59.897,68.872,63.824,64.304,63.824z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>

          {/* Discourse */}
          <a
            href="https://discourse.nouns.wtf/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -1 104 106"
              className="h-6 w-6 fill-black sm:fill-white dark:fill-white hover:fill-gray-400 transition cursor-pointer"
            >
              <title>Discourse_logo</title>
              <g id="Layer_2">
                <g id="Layer_3">
                  <path d="M51.87,0C23.71,0,0,22.83,0,51c0,.91,0,52.81,0,52.81l51.86-.05c28.16,0,51-23.71,51-51.87S80,0,51.87,0Z" />
                  <path d="M52.37,19.74A31.62,31.62,0,0,0,24.58,66.41l-5.72,18.4L39.4,80.17a31.61,31.61,0,1,0,13-60.43Z" />
                  <path d="M77.45,32.12a31.6,31.6,0,0,1-38.05,48L18.86,84.82l20.91-2.47A31.6,31.6,0,0,0,77.45,32.12Z" />
                  <path d="M71.63,26.29A31.6,31.6,0,0,1,38.8,78L18.86,84.82,39.4,80.17A31.6,31.6,0,0,0,71.63,26.29Z" />
                  <path d="M26.47,67.11a31.61,31.61,0,0,1,51-35A31.61,31.61,0,0,0,24.58,66.41l-5.72,18.4Z" />
                  <path d="M24.58,66.41A31.61,31.61,0,0,1,71.63,26.29a31.61,31.61,0,0,0-49,39.63l-3.76,18.9Z" />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
