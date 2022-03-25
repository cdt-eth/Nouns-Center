import React from "react";

interface SubheaderBodyButtonProps {
  title: string;
  body: any;
  btnLink: string;
  btnText: string;
  download?: boolean;
}

const SubheaderBodyButton = ({
  title,
  body,
  btnLink,
  btnText,
  download,
}: SubheaderBodyButtonProps) => {
  return (
    <div className="sm:flex sm:items-center text-white mb-6">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="mt-2 text-md ">{body}</p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <a
          download={download}
          href={btnLink}
          target="_blank"
          className="inline-flex capitalize items-center justify-center rounded-md border border-transparent bg-nouns-bg-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition duration-100 focus:outline-none focus:ring-2 focus:ring-nouns-bg-blue focus:ring-offset-2 sm:w-auto"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default SubheaderBodyButton;
