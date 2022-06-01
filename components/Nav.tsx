/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Disclosure } from "@headlessui/react";
// import nav from "../api/nav.json";
import nav from "../api/nav2.json";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = ({ setSidebarOpen }) => {
  return (
    <div className="flex flex-col flex-grow  py-5 pb-4 bg-grey-base">
      <Link passHref href="/">
        <div
          className="sm:cursor-pointer items-center flex-shrink-0 px-4"
          onClick={() => setSidebarOpen(false)}
        >
          <img className="hidden w-1/6 mr-2" src="earth.gif" alt="earth" />
        </div>
      </Link>

      <div className="flex-grow flex flex-col">
        <nav
          className="flex-1 px-4 space-y-1 bg-grey-base flex-col justify-between flex"
          aria-label="Sidebar"
        >
          <div>
            {/* No SubNav */}
            {nav.map((item) =>
              !item.children ? (
                <div key={item.name}>
                  {/* <a
                    href={item.link}
                    className={classNames(
                      item.current
                        ? "bg-grey-base text-red-500"
                        : "bg-grey-base text-black hover:text-gray-500",
                      "group w-full flex items-center pl-2 py-2 xs:text-text-lg sm:text-base font-medium rounded-md"
                    )}
                  >
                    {}
                    {item.name}
                  </a> */}
                  TESTING
                </div>
              ) : (
                //  Has SubNav
                <Disclosure as="div" key={item.name} className="space-y-1">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? "bg-grey-base text-black focus:outline-none"
                            : "bg-grey-base text-black hover:bg-opacity-80  hover:text-gray-500",
                          "group w-full flex items-center pl-2 pr-1 py-2 text-left xs:text-text-lg sm:text-base font-medium rounded-md focus:outline-none "
                        )}
                      >
                        <span className="flex-1">{item.name}</span>

                        {item.children.length ? (
                          <span
                            className={classNames(
                              item.current
                                ? "bg-black"
                                : "bg-black text-white group-hover:bg-opacity-80",
                              "ml-3 inline-block py-0.5 px-2 text-xs font-medium rounded-full group-hover:text-white"
                            )}
                          >
                            {item.children.length}
                          </span>
                        ) : null}

                        <svg
                          className={classNames(
                            open ? "text-black rotate-90" : "text-black",
                            "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-500 transition-colors ease-in-out duration-150"
                          )}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </Disclosure.Button>

                      <Disclosure.Panel className="space-y-1">
                        {item.children.map((subItem) => (
                          <div
                            key={item.name}
                            className="flex ml-3 px-1 items-center rounded-md"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {/* <Link passHref href="/">
                              <img
                                className="w-6 h-6 cursor-pointer rounded-full"
                                src={`/nav/${subItem.image}`}
                                alt="earth"
                              />
                            </Link> */}

                            {subItem.external ? (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={subItem.link}
                                target="_blank"
                                rel="noreferrer"
                                className="focus:outline-none group w-full flex items-center pr-2 pl-2 py-1 text-base font-medium text-nouns-black hover:text-gray-500 "
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ) : (
                              <Link href={subItem.link}>
                                <a className="focus:outline-none group w-full flex items-center pr-2 pl-2 py-1 text-base font-medium text-nouns-black hover:text-gray-500 ">
                                  {subItem.name}
                                </a>
                              </Link>
                            )}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            )}
          </div>

          {/* <div className="px-2 pb-2 hidden">
            <DarkModeToggle />
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
