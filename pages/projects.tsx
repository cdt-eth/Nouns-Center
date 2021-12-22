import React from "react";
import Header from "./components/Header";
import projects from "./api/projects.json";
import XSmall from "./components/Project/XSmall";

const Projects = () => {
  return (
    <div className="mb-16">
      <Header title="Projects | Nouns Center" />

      <div className="text-4xl text-nouns pb-6 tracking-wide">Projects</div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {projects &&
          projects.map((project) => (
            <XSmall key={project.title} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
