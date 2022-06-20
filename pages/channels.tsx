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
            <div className="pb-14" key={group.title}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-4xl pb-2 leading-6 font-medium text-gray-900 text-nouns">
                  {group.title}
                </h3>
                <p className="mt-2 italic max-w-2xl text-md text-gray-500">
                  {group.overview}
                </p>
              </div>

              {group.channels.map((channel) => (
                <div
                  className="border-t border-gray-200 px-4 py-5 sm:p-0"
                  key={channel.name}
                >
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-semibold ">
                        #{channel.name}
                      </dt>
                      <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                        {channel.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          ))}
        </div>
      </PageContent>
    </>
  );
};

export default Channels;
