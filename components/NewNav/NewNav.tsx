/* eslint-disable @next/next/no-img-element */

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../common/Button";
import nav from "../../api/nav2.json";
import Mobile from "./Mobile";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex justify-between h-16">
                <div className="flex">
                  {/* MOBILE EXPAND ICON */}
                  <div className="-ml-2 mr-2 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  {/* EARTH LOGO */}
                  <div className="flex-shrink-0 flex items-center ">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/earth.gif"
                      // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/earth.gif"
                      // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </div>

                  {/* DESKTOP NAV ITEMS */}
                  <div className="hidden md:ml-6 sm:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default:
            "border-transparent text-gray-500 hover:border-gray-300
            hover:text-gray-700" */}

                    {nav.map((section) => (
                      <a
                        href="#"
                        key={section.name}
                        className="active:border-b-2 active:border-b-blue-base text-black inline-flex items-center px-1 pt-1 border-2 border-transparent hover:border-b-black/50 text-sm font-medium"
                      >
                        {section.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* GO TO NOUNS BUTTON */}
                <div className="flex items-center flex-shrink-0">
                  <Button
                    link="https://nouns.wtf/"
                    text="go to nouns.wtf"
                    small
                  />
                </div>
              </div>
            </div>

            {/* MOBILE MENU */}
            <Mobile />
          </>
        )}
      </Disclosure>
    </>
  );
};

export default NewNav;
