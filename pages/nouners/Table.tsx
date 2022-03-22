import React from "react";

interface GrantProps {
  id: string;
  ETH: string;
  Cause: string;
  Recipient: string;
}

interface Grants {
  grants: GrantProps[];
}

const Table = ({ grants }: Grants) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center text-white">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold ">
            Small Grants &#38; Reto Funding
          </h1>
          <p className="mt-2 text-sm ">
            A list of all projects &#38; creators who have either been given a
            grant from NounsDAO or received retroactive funding for
            proliferating Nouns.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <a
            href="https://discord.com/channels/849745721544146955/903077530502828092"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Request funding
          </a>
        </div>
      </div>

      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-1/2"
              >
                Cause
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Recipient
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell w-1/5"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Amount
              </th>
              {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {grants &&
              grants.map((grant) => (
                <tr key={grant.id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {grant.Cause}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Title</dt>
                      <dd className="mt-1 truncate text-gray-700">
                        {grant.Recipient}
                      </dd>
                      <dt className="sr-only sm:hidden">Email</dt>
                      {/* <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {grant.Recipient}
                    </dd> */}
                    </dl>
                  </td>

                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {grant.Recipient}
                  </td>
                  {/* <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  jiejoj{grant.ETH}
                </td> */}
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {grant.ETH}
                  </td>
                  {/* <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {grant.ETH}</span>
                  </a>
                </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
