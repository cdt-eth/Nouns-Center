import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
// import { useRouter } from "next/router";

import "react-notion/src/styles.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

const oniNotionTable = "e29fc3a9-2c4a-44c9-8210-f5142b751502";
const rootNotionPageId = "e29fc3a92c4a44c98210f5142b751502"; // collection

export async function getStaticProps() {
  const ids = await fetch(
    `https://notion-api.splitbee.io/v1/table/${oniNotionTable}`
  ).then((res) => res.json());

  // const data = await fetch(
  //   `https://notion-api.splitbee.io/v1/page/${rootNotionPageId}`
  // ).then((res) => res.json());

  return {
    props: {
      tableIds: ids,
      // blockMap: data,
    },
  };
}

// const tabs = [
//   { name: "My Account", href: "#", current: false },
//   { name: "Company", href: "#", current: false },
//   { name: "Team Members", href: "#", current: true },
//   { name: "Billing", href: "#", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nouners = ({ tableIds }) => {
  const [currentPostId, setCurrentPostId] = useState(rootNotionPageId);
  const [postData, setPostData] = useState(null);

  tableIds.map((post, idx) => {
    if (idx === 0) {
      return { ...post, current: true };
    } else {
      return { ...post, current: false };
    }
  });

  tableIds && console.log("ids", tableIds);

  useEffect(() => {
    const data = fetch(
      `https://notion-api.splitbee.io/v1/page/${currentPostId}`
    )
      .then((res) => res.json())
      .then((data) => setPostData(data));
    postData && console.log("p", postData);
  }, [currentPostId]);

  const handleClick = (id) => {
    console.log("id", id);
    setCurrentPostId(id);
  };

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            // defaultValue={tableIds.find((id) => id.current).Name}
          >
            {tableIds.map((id) => (
              <option key={id.Name}>{id.Name}</option>
            ))}
            {/* {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))} */}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tableIds.map((id) => (
                <a
                  key={id.Name}
                  onClick={() => handleClick(id.id)}
                  // href={id.href}
                  className={classNames(
                    id.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer"
                  )}
                  aria-current={id.current ? "page" : undefined}
                >
                  {id.Name.substring(0, 5)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {postData && (
        <div className="text-white">
          <NotionRenderer blockMap={postData} />
        </div>
      )}
    </>
  );
};

export default Nouners;

// const getRandomNoun = () => {
//   const min = 0;
//   const max = 170;

//   const nounId = Math.floor(Math.random() * (max - min + 1) + min);

//   return nounId;
// };

// getRandomNoun();

// const files = [
//   {
//     title: "IMG_4985.HEIC",
//     size: "3.9 MB",
//     source:
//       "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//   },
//   // More files...
// ];

// const Nouners = ({ tableIds }) => {
//   const router = useRouter();

//   tableIds && console.log("ids", tableIds);

//   const getRandomNoun = () => {
//     const min = 0;
//     const max = 170;

//     const nounId = Math.floor(Math.random() * (max - min + 1) + min);

//     return nounId;
//   };

//   getRandomNoun();

//   const files = [
//     {
//       title: "IMG_4985.HEIC",
//       size: "3.9 MB",
//       source:
//         "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//     },
//     // More files...
//   ];

//   return (
//     <div>
//       <Header title="Nouners | Nouns Center" />
//       <Title title="Nouners" />

//       <h3 className="text-nouns text-center">Weekly Calls</h3>
//       <ul
//         role="list"
//         className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
//       >
//         {tableIds.map((post) => (
//           <li key={files[0].source} className="relative">
//             <div
//               onClick={() => router.push(`/nouners/${post.id}`)}
//               className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={`https://noun.pics/${getRandomNoun()}`}
//                 alt="randomNoun"
//                 className="object-cover pointer-events-none group-hover:opacity-75"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-0 focus:outline-none"
//               >
//                 <span className="sr-only">
//                   View details for {files[0].title}
//                 </span>
//               </button>
//             </div>

//             <p className="mt-2 block text-sm font-medium text-white truncate pointer-events-none">
//               {/* {files[0].title} */}
//               {post.Name.substring(0, 5)}
//             </p>
//             <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//               {files[0].size}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Nouners;
