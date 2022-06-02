/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Nav from "./Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();
  const { asPath } = router;

  return (
    <div>
      {/* Mobile Menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 "
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-grey-light bg-opacity-95 " />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-[15rem] w-full bg-nouns-bg-darkgrey">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset ring-black focus:ring-black"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 black-text " aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              <Nav setSidebarOpen={setSidebarOpen} />
            </div>
          </Transition.Child>

          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-row flex-1 pt-5 ">
        <div className="sticky top-0 xs:px-4 sm:px-6 z-40 flex items-center justify-between w-full">
          <div className="w-1/3 flex self-center">
            <button
              type="button"
              className={`-mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-900  hover:text-gray-500 focus:outline-none ${
                asPath === "/" && "text-black "
              } `}
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* <Link passHref href="/">
            <div className="flex self-center  items-center cursor-pointer text-nouns  transition text-blue-base hover:text-nouns-bg-blue  dark:hover:text-blue-base xs:text-xl sm:text-3xl gap-2">
               eslint-disable-next-line @next/next/no-img-element 
              <img
                src="/earth.gif"
                alt="earth"
                className="h-12 w-12 flex self-center"
              />
            </div>
          </Link> */}

          <div className="w-1/3 flex items-center justify-end gap-3">
            {/* <DocSearch
              appId="PGIH0KF5F5"
              indexName="nc"
              apiKey="faf1987de1d83c02e82fbf9bfd7ca5a9"
            /> */}
            {/* {/* // apiKey="567090186f67f33178636e2281fd3655"  */}
            {/* <DocSearch
              appId="R2IYF7ETH7"
              apiKey="599cec31baffa4868cae4e79f180729b"
              indexName="docsearch"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
