import React from "react";
import Button from "../components/common/Button";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Table from "../components/nouners/Table";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

const twentytwoNotionPage = "ac22114a6c004bafa500e2d824e32dc3";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/table/${twentytwoNotionPage}`
    );
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String("No data was found!");
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      grantsData: data,
    },
  };
}

const funding = [
  {
    source: "Small Grants",
    range: "0.1 - 10",
    totalEth: 167,
    recipients: 84,
    recipientType: "projects",
    distributed: "given to",
    link: "https://discord.com/channels/849745721544146955/903077530502828092",
    linkText: "Request a grant",
    tagline:
      "Creators who have either been given a grant from NounsDAO or received retroactive funding for proliferating Nouns.",
  },
  {
    source: "Prop House",
    range: "2 - 10",
    totalEth: 49,
    recipients: 12,
    recipientType: "winners",
    distributed: "awarded to ",
    link: "https://prop.house/",
    linkText: "Submit prop",
    tagline:
      "Submit proposals to prop.house. Each round has a specified ETH amount, and the community votes on who wins.",
  },
  {
    source: "Proposals",
    range: "10 - 600",
    totalEth: 3655,
    recipients: 67,
    recipientType: "props",
    distributed: "across",
    link: "https://nouns.wtf/vote",
    linkText: "Learn more",
    tagline:
      "Resources allocated for the long-term growth of the Nouns project. Larger in scope and undergo more scruntiny.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Funding = ({ grantsData }) => {
  // return grantsData ? (
  return (
    <>
      <PageHeader>
        <Header title="Funding | Nouns Center" />
        <Title title="Funding" />

        <Subheader body="Looking to get funding for a Nounish project? There's many ways to go about doing so!" />
        {/* <Button
          text="Request funding"
          link="https://discord.com/channels/849745721544146955/903077530502828092"
        /> */}
      </PageHeader>

      <PageContent>
        <>
          {/* <Table grants={grantsData} /> */}

          <div>
            <dl className="mt-5 grid grid-cols-1 flex-col rounded-xl overflow-hidden sm:shadow-none md:grid-cols-3 xs:gap-8 sm:gap-2">
              {funding.map((item) => (
                <div
                  key={item.recipients}
                  className="relative bg-white py-5 px-4 pb-16 sm:pt-6 sm:px-6 xs:shadow-sm sm:shadow-none xs:rounded-lg  overflow-hidden sm:divide-x divide-white"

                  // className="px-4 py-5 sm:p-6 relative"
                >
                  <dt className="text-nouns text-2xl tracking-wide pb-4">
                    {item.source}
                  </dt>

                  <dd className="mt-1 flex flex-col justify-between items-baseline md:block lg:flex">
                    <div className="items-baseline text-4xl font-semibold text-blue-base ">
                      {/* {item.totalEth.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })} */}
                      {item.range}Ξ{" "}
                    </div>

                    <span className="pt-3 text-sm font-medium text-gray-500">
                      {/* {item.totalEth.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      eth {item.distributed} {item.recipients}{" "}
                      {item.recipientType} */}
                      • Total eth:{" "}
                      {item.totalEth.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      <br />• {item.recipients} {item.recipientType} funded
                      <br />
                      <br />
                      {item.tagline}
                    </span>

                    {/* <span className="pt-0 text-base font-medium text-gray-500">
                      {item.distributed} {item.recipients} {item.recipientType}
                    </span> */}
                  </dd>
                  <div className="absolute hover:bg-opacity-80 transition cursor-pointer bottom-0 inset-x-0 rounded-b-xl bg-blue-base px-4 py-3 sm:px-6">
                    <div className="text-sm ">
                      <a href={item.link} className="font-medium text-white">
                        {" "}
                        {item.linkText} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* <div className="mt-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              varius urna in dictum cursus. Aenean posuere elit nec bibendum
              tristique. Duis sit amet sodales velit. Mauris vitae pharetra
              ante, eu ornare ligula. Proin vel risus vulputate, ultricies quam
              vitae, cursus risus. Morbi in sodales lectus, nec tincidunt metus.
              Maecenas eu sem massa. Donec eu rutrum libero. Phasellus posuere
              lorem vel nulla convallis, id eleifend leo ultricies. Quisque erat
              turpis, ullamcorper id justo sed, interdum sodales leo. Curabitur
              at tortor sapien.
            </p>
            <br />
            <p>
              Fusce laoreet magna magna. Integer enim ipsum, dictum nec justo
              et, rhoncus pretium mi. Donec gravida lectus non sem tempor
              gravida. Nulla id nisi consequat, convallis dolor at, tincidunt
              risus. Vivamus eget justo tortor. Sed et nibh fermentum, faucibus
              odio non, sollicitudin diam. Quisque nec ipsum ut massa rutrum
              dictum condimentum viverra nunc. Praesent dapibus ligula quis
              interdum vehicula. Aenean lobortis turpis a quam fermentum, id
              hendrerit sem vestibulum. Donec nulla odio, tincidunt at facilisis
              id, pulvinar vel dui. Quisque sodales, est sed accumsan dignissim,
              velit elit faucibus mi, ut dignissim velit quam non sapien. In hac
              habitasse platea dictumst. Vivamus ut suscipit metus. Vestibulum
              augue massa, fringilla eget congue ac, mattis vel quam. Sed congue
              elit ut turpis laoreet convallis. Etiam accumsan eu lectus ut
              vestibulum.
            </p>
            <br />
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse congue ornare neque, eu ultricies leo vulputate nec.
              Suspendisse ultricies felis feugiat turpis euismod, quis gravida
              dolor consequat. Aenean sit amet nisi sed enim ornare tincidunt
              sagittis a felis. Sed eleifend, felis id aliquam blandit, leo nunc
              semper lorem, at lobortis metus ex nec metus. Sed justo ante,
              feugiat sit amet aliquet nec, porttitor quis augue. Fusce interdum
              tellus in odio bibendum faucibus. Nunc maximus dapibus ex eu
              fringilla.
            </p>
          </div> */}
        </>
      </PageContent>
    </>
    // ) : (
    //   <></>
  );
};

export default Funding;
