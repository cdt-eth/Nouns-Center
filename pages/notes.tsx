import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import 'react-notion/src/styles.css';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { v4 as uuidv4 } from 'uuid';
import { NotionRenderer } from 'react-notion';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Subheader from '../components/Subheader';
import Loading from '../components/Loading';
import PageContent from '../components/Layout/PageContent';
import PageHeader from '../components/Layout/PageHeader';

const oniNotionTable = 'e29fc3a9-2c4a-44c9-8210-f5142b751502';

export async function getStaticProps() {
  let ids = [];
  let error = '';

  try {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${oniNotionTable}`);
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);

    ids = await res.json();

    if (!ids) throw String('No data was found!');
    ids = JSON.parse(JSON.stringify(ids));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      tableIds: ids,
      mostRecentPostId: ids[0]?.id,
    },
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Notes = ({ tableIds, mostRecentPostId }) => {
  const [currentPostId, setCurrentPostId] = useState(mostRecentPostId);
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const data = fetch(`https://notion-api.splitbee.io/v1/page/${currentPostId}`)
      .then(res => res.json())
      .then(data => {
        setPostData(data);
        setIsLoading(false);
      });
  }, [currentPostId]);

  const getWeekName = (id: any) => {
    return id.Name.substring(0, 5);
  };

  const currentId = tableIds?.find(t => t.id === currentPostId)!;

  return (
    <>
      <PageHeader>
        <Header title="Notes | Nouns Center" />
        <Title title="Notes" />

        <Subheader
          title="Weekly Nouner call notes"
          body="Click the button and select a week to read the meeting notes."

          // customBtn={
          //   <>
          //     <Menu as="div" className="relative w-full inline-block text-left">
          //       <div className="flex justify-between ">
          //         <div className="">
          //           <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          //             {currentId ? getWeekName(currentId) : "Week"}
          //             <ChevronDownIcon
          //               className="-mr-1 ml-2 h-5 w-5"
          //               aria-hidden="true"
          //             />
          //           </Menu.Button>
          //         </div>
          //       </div>

          //       <Transition
          //         as={Fragment}
          //         enter="transition ease-out duration-100"
          //         enterFrom="transform opacity-0 scale-95"
          //         enterTo="transform opacity-100 scale-100"
          //         leave="transition ease-in duration-75"
          //         leaveFrom="transform opacity-100 scale-100"
          //         leaveTo="transform opacity-0 scale-95"
          //       >
          //         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          //           <div className="py-1">
          //             {tableIds &&
          //               tableIds.map((id) => (
          //                 <Menu.Item key={uuidv4()}>
          //                   {({ active }) => (
          //                     <div
          //                       onClick={() => setCurrentPostId(id.id)}
          //                       className={classNames(
          //                         active
          //                           ? "bg-gray-100 text-gray-900"
          //                           : "text-gray-700",
          //                         "block px-4 py-2 text-sm"
          //                       )}
          //                     >
          //                       {getWeekName(id)}
          //                     </div>
          //                   )}
          //                 </Menu.Item>
          //               ))}
          //           </div>
          //         </Menu.Items>
          //       </Transition>
          //     </Menu>
          //   </>
          // }
        />
        <>
          <Menu as="div" className="relative w-full inline-block text-left">
            <div className="flex justify-between ">
              <div className="">
                <Menu.Button className="inline-flex capitalize items-center justify-center rounded-xl border border-transparent text-white bg-blue-base focus:ring-gray-200 hover:bg-opacity-80  dark:bg-nouns-bg-blue dark:hover:bg-blue-700 dark:focus:ring-nouns-bg-blue px-4 py-3 text-sm font-medium shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  {currentId ? getWeekName(currentId) : 'Week'}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-left absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll h-72">
                <div className="py-1">
                  {tableIds &&
                    tableIds.map(id => (
                      <Menu.Item key={uuidv4()}>
                        {({ active }) => (
                          <div
                            onClick={() => setCurrentPostId(id.id)}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            {getWeekName(id)}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      </PageHeader>

      <PageContent>
        {isLoading ? (
          <Loading />
        ) : (
          postData && (
            <div className="text-white notionNotes">
              <NotionRenderer blockMap={postData} />
            </div>
          )
        )}
      </PageContent>
    </>
  );
};

export default Notes;
