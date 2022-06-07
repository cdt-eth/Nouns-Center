/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

// import openseaIcon from "../../public/icons/opensea.svg";
import projects from "../../api/projects.json";
import PageContent from "../../components/Layout/PageContent";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log("id", id);

  const p = projects.filter(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === id
    // (p) => p.title.replace(/\s+/g, "-").toLowerCase() === id
  );

  return {
    props: {
      projectData: p[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.title.replace(/\s+/g, "-").toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getProjectsText = (category: string) => {
  switch (category) {
    case "nfts":
      return "NFTs";
    case "proposal":
      return "Proposals";
    case "prop-pouse":
      return "Prop House";
    case "small-grants":
      return "Small Grants";
    case "merch":
      return "Merch";
    case "stats":
      return "Stats";
    case "misc":
      return "Miscellaneous";
    default:
      return category;
  }
};

const ProjectDetails = ({ projectData }) => {
  const { title, description, creator, url, image, category } = projectData;

  return (
    <PageContent>
      <div className="bg-gray-50 rounded-xl">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <div className="text-black">
              <span className="text-4xl font-extrabold text-nouns tracking-wider flex flex-col">
                {title}
              </span>

              <span className="">
                {/* {category.length <= 1
                  ? category
                  : category.map((c) => <span key={category}>{category}</span>)} */}
                {category.join(", ")}
              </span>
            </div>

            <Link passHref href="/projects">
              <a className="hidden text-sm font-semibold text-blue-base hover:text-blue-base sm:block">
                All projects<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-w-2 aspect-h-1 rounded-lg border-black overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <a href={url} target="_blank" rel="noreferrer">
                <img
                  src={`/projects/${image}`}
                  alt={image}
                  className="object-center object-cover group-hover:opacity-75 h-full"
                />
              </a>

              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />

              <div className="p-6 flex items-end">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href={url} target="_blank" rel="noreferrer">
                      <span className=" inset-0" />
                      New Arrivals
                    </a>
                  </h3>

                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>

            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />

              <div className="p-6 flex items-end sm:absolute sm:inset-0 xs:text-black sm:text-white">
                <div>
                  <h3 className="font-semibold">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Opensea
                    </a>
                  </h3>

                  <div className="flex gap-1">
                    <img src="/icons/opensea.svg" alt="" className="h-6" />
                    <p aria-hidden="true" className="mt-1 text-sm">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />

              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />

              <div className="p-6 flex items-end sm:absolute sm:inset-0">
                <div className="xs:text-black sm:text-white">
                  <h3 className="font-semibold">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Creator
                    </a>
                  </h3>

                  <p aria-hidden="true" className="mt-1 text-sm">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-blue-base hover:text-blue-base"
            >
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="text-black font-medium pt-12">{description}</div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* <div className={`bg-cover bg-center ${getBgImg(image)}`}></div> */}

      {/* <img
        className="bg-cover bg-center relative"
        src={`/projects/${image}`}
        alt={image}
      />
      <div className="">
        <div>{title}</div>
        <div>{description}</div>
        <div>{creator}</div>
        <div>{url}</div>
        <div>{category}</div>
        <a href={url} target="_blank" rel="noreferrer">
          View
        </a>
      </div> */}
    </PageContent>
  );
};

export default ProjectDetails;
