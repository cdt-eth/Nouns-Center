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
    <div className="sm:flex sm:items-center dark:text-white">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="my-4 text-md font-medium">{body}</p>
        {/* </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none self-baseline"> */}
        {customBtn ? (
          customBtn
        ) : (
          <a
            download={download && download}
            href={btnLink && btnLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white dark:text-white bg-blue-base focus:ring-gray-200 hover:bg-opacity-80  dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            {btnText && btnText}
          </a>
        )}
      </div>
    </div>
  );
};

export default SubheaderBodyButton;
