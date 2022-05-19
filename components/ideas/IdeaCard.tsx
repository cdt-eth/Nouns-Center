import React from "react";

interface IdeaCardProps {
  title: string;
  body: string;
  submittedBy: string;
  date: string;
  votes: number;
}

const IdeaCard = ({ title, body, submittedBy, date, votes }: IdeaCardProps) => {
  return (
    <div className="">
      <div className="mt-5">
        {/* <div className="text-sm font-medium text-gray-900 mb-2">
          Ending with 4242
        </div> */}

        <div className="rounded-xl bg-gray-50 dark:bg-white px-6 py-5 min-h-[225px] sm:flex sm:items-start sm:justify-between flex-col">
          <div className="sm:flex sm:items-start gap-2">
            <div className="flex flex-col items-center cursor-pointer text-nouns-dark-grey hover:text-gray-300 transition">
              {/* heart svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="h-8 w-auto sm:flex-shrink-0 sm:h-10"
              >
                <path
                  fill="currentColor"
                  d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m7-4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3Z"
                />
              </svg>

              <div className="text-xs">{votes}</div>
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-4">
              <div className="text-lg text-nouns tracking-wide font-medium text-gray-900 leading-none">
                {title}
              </div>

              <div className="text-black pt-4 line-clamp-3">{body}</div>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:flex-shrink-0 justify-between  flex w-full">
            <div className="mt-1 text-sm text-gray-600 sm:flex flex-col">
              <div className="italic">
                By: <span className="">{submittedBy}</span>
              </div>

              <div className="mt-1 sm:mt-0">{date}</div>
            </div>

            <a className="inline-flex cursor-pointer items-center font-medium transition rounded-md text-blue-500 hover:text-gray-700 underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
