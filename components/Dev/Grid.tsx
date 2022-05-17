/* eslint-disable @next/next/no-img-element */
import React from "react";
import devResources from "../../api/devResources.json";

interface ResourceProps {
  name: string;
  imageUrl: string;
  bio: string;
  url: string;
  btnText: string;
}

const Grid = () => {
  return (
    <div className="bg-white text-black rounded-lg">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="devGrid">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 grid xs:grid-rows-1 sm:grid-rows-3  sm:grid-flow-col gap-4"
          >
            {devResources.map((resource: ResourceProps) => (
              <li key={resource.name} className="sm:py-8">
                <h3 className="text-nouns leading-6 font-medium text-3xl mb-6">
                  {resource.name}
                </h3>

                <div className="w-full flex gap-6 xs:flex-col sm:flex-row">
                  <img
                    className="object-cover shadow-lg rounded-lg sm:max-w-md  sm:h-52"
                    src={`/dev/${resource.imageUrl}`}
                    alt=""
                  />
                </div>

                <div className="mt-4">
                  <div className="text-base">
                    <p className="text-gray-500">{resource.bio}</p>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex capitalize items-center justify-center rounded-md border border-transparent  px-4 py-2  mt-2 text-sm font-medium shadow-sm  transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto
                    
                    text-black dark:text-white bg-gray-200  focus:ring-gray-200 hover:bg-grey-base dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue

                    "
                  >
                    {resource.btnText}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
