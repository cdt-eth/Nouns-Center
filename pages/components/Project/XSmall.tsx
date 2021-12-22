import React from "react";

const XSmall = ({ project }) => {
  //   const { title, description, creator, url, image } = project;

  return project ? (
    <div className="xs:max-h-48 sm:max-h-72">
      <a
        className="group block sm:cursor-pointer transition duration-200 h-full w-full aspect-w-10 aspect-h-10 rounded-xl bg-gray-100 focus-within:ring-2 relative focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
        href={project.url}
        target="_blank"
      >
        <div className="absolute h-full w-full font-semibold px-4 pb-2 text-lg flex items-end gradient">
          {project.title}
        </div>
        <img
          className="object-cover w-full h-full"
          src={`/projects/${project.image}`}
          alt={project.image}
        />
      </a>
    </div>
  ) : (
    <></>
  );
};

export default XSmall;
