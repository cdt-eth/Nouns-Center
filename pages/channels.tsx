/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import channelGroups from "../api/channels.json";

const Channels = () => {
  return (
    <>
      <PageHeader>
        <Header title="Channels | Nouns Center" />
        <Title title="Channels" />

        <Subheader body="A quick overview of everything." />
      </PageHeader>

      <PageContent>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {channelGroups.map((group) => (
            <>
              <div className="px-4 py-5 sm:px-6" key={group.title}>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {group.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {group.overview}
                </p>
              </div>

              {group.channels.map((channel) => (
                <div
                  className="border-t border-gray-200 px-4 py-5 sm:p-0"
                  key={channel.name}
                >
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        {channel.name}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {channel.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </>
          ))}
        </div>
      </PageContent>
    </>
  );
};

export default Channels;
