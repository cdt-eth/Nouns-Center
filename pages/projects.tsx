import React, { useState } from "react";
import Header from "./components/Header";
import projects from "./api/projects.json";
import XSmall from "./components/Project/XSmall";
import Title from "./components/Title";
// import Filter from "./components/Project/Filter";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = [
    { id: "all", title: "All" },
    { id: "nfts", title: "NFTs" },
    { id: "proposal", title: "Proposal" },
    { id: "propHouse", title: "Prop House" },
    { id: "smallGrants", title: "Small Grants" },
  ];

  const handleClick = (e) => {
    const curr = e.target.id;
    let filtered = [];
    console.log("curr", curr);

    if (curr === "all") {
      filtered = projects;
    } else {
      filtered = projects.filter(
        (p) => p.category && p.category.length > 1 && p.category.includes(curr)

        // filtered = projects.filter((p) => p.category === curr);
      );
    }

    setFilteredProjects(filtered);
  };
  return (
    <div className="mb-16">
      <Header title="Projects | Nouns Center" />
      <Title title="Projects" />

      {/* <Filter  /> */}

      <div className="mb-4">
        <div className="">
          {/* <label className="text-base font-medium text-white">Categories</label>
          <p className="text-sm leading-5 text-white">
            Please click one to filter.
          </p> */}
          <fieldset className="mt-4 text-white">
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    onClick={handleClick}
                    id={category.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={category.id === "all"}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor={category.id}
                    className="ml-3 block text-sm font-medium"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 xs:grid-cols-3  sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">
        {filteredProjects &&
          filteredProjects.map((project) => (
            <XSmall key={project.title} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
