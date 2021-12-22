import React from "react";

const XSmall = ({ project }) => {
  const { title, description, creator, url, image } = project;

  return (
    <div className="">
      <a
        className="group block sm:cursor-pointer transition duration-200 h-full w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 relative focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
        href={url}
        target="_blank"
      >
        <div className="absolute h-full w-full font-semibold px-4 pb-2 text-lg flex items-end gradient">
          {title}
        </div>
        <img
          className="object-cover h-full"
          src={`/projects/${image}`}
          alt={image}
        />
      </a>
    </div>
  );
};

export default XSmall;
