/* eslint-disable @next/next/no-img-element */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTwitter as TwitterIcon, FaDiscord as DiscordIcon } from 'react-icons/fa';

interface GroupsProps {
  id: string;
  Name: string;
  Discord: string;
  'Leading people': string[];
  Platform: string[];
  Description?: string;
  Twitter?: string;
  Logo: any;
  Topics: string[];
}

interface Groups {
  groups: GroupsProps[];
}

const Table = ({ groups }: Groups) => {
  const [filteredGroups, setFilteredGroups] = useState([]);
  // const fetchMemberCount = async (inviteID: string) => {
  //   const apiResult = await axios({
  //     method: 'get',
  //     url: `https://discord.com/api/v9/invites/${inviteID}?with_counts=true&with_expiration=true`,
  //   });

  //   const members = apiResult.data.approximate_presence_count;

  //   return members ? members : '-';
  // };

  // const getNumberOfDiscordMembers = (group: GroupsProps) => {
  //   if (!group.Discord) return '-';
  //   const inviteID = group.Discord.split('gg/')[1];

  //   const memberCount = fetchMemberCount(inviteID);

  //   return memberCount;
  // };

  useEffect(() => {
    setFilteredGroups(groups.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto"></div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Community
                    </th>
                    {/* <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Members
                    </th> */}
                    <th
                      scope="col"
                      className="px-4 sm:px-12 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      Join
                    </th>
                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th> */}
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredGroups.map(group => {
                    return (
                      <tr key={group.id}>
                        <td className=" py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-14 w-14 flex-shrink-0 xs:hidden sm:flex">
                              <img
                                className="h-14 w-14 rounded-full"
                                src={group.Logo ? group.Logo[0].url : './loadingnoun.jpg'}
                                alt={group.Logo ? group.Logo[0].name : ''}
                              />
                            </div>

                            <div className="sm:ml-4">
                              <div className="flex gap-4">
                                <div className="font-medium text-nouns tracking-wider text-gray-900">
                                  {group.Name ? group.Name : '-'}
                                </div>
                                <div className="font-medium text-nouns tracking-wider text-gray-900">
                                  {group.Topics &&
                                    group.Topics.map(topic => (
                                      <span
                                        key={topic}
                                        className="flex-shrink-0 ml-1.5 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full lowercase text"
                                      >
                                        {topic}
                                      </span>
                                    ))}
                                </div>
                              </div>

                              <div className="text-gray-500">
                                {group.Description ? group.Description : '-'}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* <td className=" px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900 text-center">
                            {getNumberOfDiscordMembers(group)}
                          </div>
                        </td> */}

                        <td className="px-4 sm:px-12 py-4 text-center text-sm text-blue-base groupsDiscord">
                          {group.Discord ? (
                            <>
                              <a
                                href={group.Discord}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:opacity-70 transition duration-100"
                              >
                                <DiscordIcon />
                              </a>
                            </>
                          ) : group['Twitter'] ? (
                            <>
                              <a
                                href={group['Twitter']}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:opacity-70 transition duration-100"
                              >
                                <TwitterIcon />
                              </a>
                            </>
                          ) : (
                            '-'
                          )}
                        </td>

                        {/* <td className=" px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {group['Twitter'] ? <TwitterIcon />:'-'}
                        </span>
                      </td> */}

                        {/* <td className="relative  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {group.name}</span>
                        </a>
                      </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
