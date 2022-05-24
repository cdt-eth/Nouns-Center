import React from "react";

interface ButtonProps {
  link: string;
  text: string;
  download?: boolean;
  self?: boolean;
}

const Button = ({ link, text, download, self }: ButtonProps) => {
  return (
    <a
      download={download && download}
      href={link}
      target={self ? "_self" : "_blank"}
      rel="noreferrer"
      className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white  bg-blue-base focus:ring-gray-200 hover:bg-opacity-80  dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
    >
      {text}
    </a>
  );
};

export default Button;
