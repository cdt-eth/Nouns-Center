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
      className={`text-indigo-400 underline text-nouns tracking-wider ${
        classes && classes
      }`}
    >
      {text}
    </a>
  );
};

export default Link;
