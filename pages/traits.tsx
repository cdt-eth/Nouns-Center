/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import traits from "../api/traits.json";

import Subheader from "../components/Subheader";
// import Link from "next/link";
import Link from "../components/Link";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const Traits = () => {
  const heads = traits.heads;
  const glasses = traits.glasses;
  const bodies = traits.bodies;
  const accessories = traits.accessories;

  const assetsPage = (
    <Link leavesPage={false} text="assets page" url="/assets" />
  );

  return (
    <>
      <PageHeader>
        <Header title="Traits | Nouns Center" />
        <Title title="Traits" />

        <Subheader
          title="234 heads, 21 glasses, 30 bodies, 137 accessories"
          body={
            <>
              All the individual traits sized up to 500 x 500px for your
              convenience. If you need other downloads check out the{" "}
              {assetsPage}.
            </>
          }
        />
        <Button link="/assets/assets_png.zip" text="Download traits" download />
      </PageHeader>

      <PageContent>
        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl mb-8">
          <h1 className="text-5xl text-nouns mb-6 text-center text-black">
            Heads
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {heads &&
              heads.map((head) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/heads/head-${head.image}.png`}
                    alt="head"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {head.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl text-nouns mb-6 text-center text-black">
            Glasses
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {glasses &&
              glasses.map((g) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/glasses/glasses-square-${g.image}.png`}
                    alt="glasses"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {g.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl text-nouns mb-6 text-center text-black">
            Bodies
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {bodies &&
              bodies.map((body) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/bodies/body-${body.image}.png`}
                    alt="body"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {body.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl text-nouns mb-6 text-center text-black">
            Accessories
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {accessories &&
              accessories.map((accessory) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/accessories/accessory-${accessory.image}.png`}
                    alt="accessory"
                  />
                  <p className="text-nouns pt-6 text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {accessory.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Traits;
