import React from "react";

interface SubheaderBodyButtonProps {
  title?: string;
  body: any;
  btnLink?: string;
  btnText?: string;
  customBtn?: any;
  download?: boolean;
}

const SubheaderBodyButton = ({
  title,
  body,
  btnLink,
  btnText,
  customBtn,
  download,
}: SubheaderBodyButtonProps) => {
  return (
    <div className="sm:flex sm:items-center dark:text-white mb-12">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="mt-2 text-md ">{body}</p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none self-baseline">
        {customBtn ? (
          customBtn
        ) : (
          <a
            download={download && download}
            href={btnLink && btnLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex capitalize items-center justify-center rounded-md border border-transparent text-black dark:text-white  bg-gray-200 focus:ring-gray-200 hover:bg-grey-base dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-2 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            {btnText && btnText}
          </a>
        )}
      </div>
    </div>
  );
};

export default SubheaderBodyButton;
