import React from "react";
import { Disclosure } from "@headlessui/react";

const navigation = [
  //   { name: "Dashboard", current: true, href: "#" },
  {
    name: "for Creatives",
    current: false,
    children: [
      { name: "Assets", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    name: "for Developers",
    current: false,
    children: [
      { name: "GitHub", href: "#" },
      { name: "Resources", href: "#" },
      { name: "Issues", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    name: "Projects",
    current: false,
    children: [
      { name: "Funded", href: "#" },
      { name: "Derivatives", href: "#" },
      { name: "Submit Project", href: "#" },
    ],
  },
  {
    name: "General",
    current: false,
    children: [
      { name: "Home", href: "#" },
      { name: "Podcasts", href: "#" },
      { name: "Statistics", href: "#" },
      { name: "Media", href: "#" },
      { name: "News", href: "#" },
    ],
  },
  {
    name: "Proposals",
    current: false,
    children: [
      { name: "Forums", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Find a Sponsor", href: "#" },
      { name: "Retro Funding", href: "#" },
      { name: "Prop House", href: "#" },
    ],
  },
  {
    name: "DAO",
    current: false,
    children: [
      { name: "History", href: "#" },
      { name: "Proposals", href: "#" },
      { name: "for Nouners", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Discord", href: "#" },
    ],
  },
  {
    name: "Miscellaneous",
    current: false,
    children: [
      { name: "Backlog", href: "#" },
      { name: "Playground", href: "#" },
      { name: "Merch", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  return (
    <div className="flex flex-col flex-grow  pt-5 pb-4 bg-nouns-bg-darkgrey overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <img className="h-14 w-auto" src="earth.png" alt="earth" />
      </div>

      <div className="mt-5 flex-grow flex flex-col">
        <nav
          className="flex-1 px-2 space-y-1 bg-nouns-bg-darkgrey"
          aria-label="Sidebar"
        >
          {/* No SubNav */}
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href="#"
                  className={classNames(
                    item.current
                      ? "bg-nouns-bg-darkgrey text-white"
                      : "bg-nouns-bg-darkgrey text-nouns-text-grey hover:bg-nouns-bg-darkgrey hover:text-white",
                    "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  {/* <item.icon
                    className={classNames(
                      item.current
                        ? "bg-nouns-bg-darkgrey text-white"
                        : "bg-nouns-bg-darkgrey text-nouns-text-grey group-hover:text-white",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  /> */}
                  {item.name}
                </a>
              </div>
            ) : (
              //  Has SubNav
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-nouns-text-nav-header focus:outline-none"
                          : "bg-nouns-bg-darkgrey text-nouns-text-nav-header hover:bg-nouns-bg-darkgrey hover:text-white",
                        "group w-full flex items-center pl-2 pr-1 py-1 text-left text-sm font-medium rounded-md focus:outline-none "
                      )}
                    >
                      {/* <item.icon
                        className="mr-3 flex-shrink-0 h-6 wbase text-nouns-text-grey group-hover:text-white"
                        aria-hidden="true"
                      /> */}
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open
                            ? "text-nouns-text-nav-header rotate-90"
                            : "text-gray-300",
                          "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-white transition-colors ease-in-out duration-150"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <div className="flex pl-3">
                          <img className="w-8" src="earth.png" alt="earth" />
                          <Disclosure.Button
                            key={subItem.name}
                            as="a"
                            href={subItem.href}
                            className="focus:outline-none group w-full flex items-center pr-2 pl-1 py-1 text-base font-medium text-nouns-text-grey rounded-md hover:text-white hover:bg-nouns-bg-darkgrey"
                          >
                            {subItem.name}
                          </Disclosure.Button>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
