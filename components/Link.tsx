import React from "react";

interface LinkProps {
  text: string;
  url: string;
  leavesPage: boolean;
  classes?: string;
}

const Link = ({ text, url, leavesPage, classes }: LinkProps) => {
  return (
    <a
      href={url}
      target={leavesPage ? "_blank" : "_self"}
      rel="noreferrer"
      className={`text-blue-500 hover:text-nouns-bg-blue transition duration-100 underline text-nouns tracking-wider ${
        classes && classes
      }`}
    >
      {text}
    </a>
  );
};

export default Link;
