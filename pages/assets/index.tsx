/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { v4 as uuidv4 } from 'uuid';
import assets from './assets.json';
import Subheader from '../../components/Subheader';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import Button from '../../components/common/Button';

const Assets = () => {
  return (
    <>
      <PageHeader>
        <Header title="Assets | Nouns Center" />
        <Title title="Assets" />

        <Subheader
          title="Resource Hub"
          body="Repository of trait assets, fonts, and other resources you may need to work with Nouns. If you're still looking for something that's not here click the button and let me know."
        />
        <Button
          text="What's missing?"
          link="https://www.addressform.io/form/2c6a8c3e-7e17-4dfa-b30e-e0620e6773d7"
        />
      </PageHeader>

      <PageContent>
        <div className="rounded-md">
          <div className="mx-auto">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8 "
            >
              {assets.map(asset => (
                <li key={uuidv4()}>
                  <div className="space-y-4">
                    <p className=" font-medium text-lg text-nouns tracking-wide">{asset.title}</p>
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg w-full  xs:max-h-48 sm:max-h-60 h-60"
                        src={`/assets/${asset.image}`}
                        alt={asset.image}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="leading-6 font-medium space-y-1 flex  justify-between items-start">
                        <Button
                          text="Download"
                          link={asset.download ? `/assets/${asset.file}` : asset.file}
                          self={asset.download}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Assets;