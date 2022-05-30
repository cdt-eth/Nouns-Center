/* eslint-disable @next/next/no-img-element */
import React from "react";
import devResources from "../../api/devResources.json";

interface ResourceProps {
  name: string;
  imageUrl: string;
  bio: string;
  url: string;
  btnText: string;
  notion: boolean;
  notionId: string;
}

const Grid = () => {
  return (
    <div className="rounded-lg">
      <div className="mx-auto ">
        <div className="devGrid">
          <ul
            role="list"
            className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 grid xs:grid-cols-1 sm:grid-cols-2  gap-4"
          >
            {devResources.map((resource: ResourceProps) => (
              <li key={resource.name} className="sm:py-8">
                <h3 className="text-nouns leading-6 font-medium text-3xl mb-6">
                  {resource.name}
                </h3>

                <div className="w-full flex gap-6 xs:flex-col sm:flex-row">
                  <img
                    className="object-cover shadow-lg w-full rounded-lg sm:max-w-md  sm:h-52"
                    src={`/dev/${resource.imageUrl}`}
                    alt=""
                  />
                </div>

                <div className="mt-4">
                  <div className="text-base">
                    <p className="min-h-[90px]">{resource.bio}</p>
                  </div>

                  <a
                    href={
                      resource.notion
                        ? "/dev/" +
                          resource.name.replace(/\s+/g, "-").toLowerCase()
                        : resource.url
                    }
                    target={resource.notion ? "_self" : "_blank"}
                    rel="noreferrer"
                    key={resource.name}
                    className="inline-flex capitalize items-center justify-center rounded-md border border-transparent  px-4 py-2  mt-2 text-sm font-medium shadow-sm  transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto  bg-blue-base text-white focus:ring-gray-200 hover:bg-opacity-80"
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
