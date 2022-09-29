/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import nav from '../api/nav2.json';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { BiLinkExternal as ExternalIcon } from 'react-icons/bi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nav = ({ setSidebarOpen }) => {
  return (
    <div className="flex flex-col flex-grow  py-5 pb-4 bg-grey-base overflow-y-scroll">
      <Link passHref href="/">
        <div
          className="sm:cursor-pointer items-center flex-shrink-0 px-4"
          onClick={() => setSidebarOpen(false)}
        >
          <Link passHref href="/">
            <img className="hidden w-1/6 mr-2" src="earth.gif" alt="earth" />
          </Link>
        </div>
      </Link>

      <div className="flex-grow flex flex-col">
        <nav
          className="flex-1 px-4 space-y-1 bg-grey-base flex-col justify-between flex"
          aria-label="Sidebar"
        >
          <div>
            {/* No SubNav */}
            <Link passHref href="/">
              <img
                onClick={() => setSidebarOpen(false)}
                src="/earth.gif"
                alt="earth"
                className="h-12 w-12 ml-1.5 flex cursor-pointer self-center mb-8"
              />
            </Link>

            {nav.map(item => (
              <Disclosure as="div" defaultOpen key={item.name} className="space-y-1 mb-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as="button"
                      className={classNames(
                        item.current
                          ? 'bg-grey-base text-black focus:outline-none'
                          : 'bg-grey-base text-black hover:bg-opacity-80  hover:text-blue-base',
                        'group w-full flex items-center text-nouns tracking-wide text-left xs:text-lg sm:text-lg font-medium rounded-md focus:outline-none transition duration-150',
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? 'text-black rotate-90' : 'text-black',
                          'flex-shrink-0 h-5 w-5 transform group-hover:text-blue-base transition duration-150',
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>

                      <span className="flex-1 text-xl">{item.name}</span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="space-y-1">
                      {item.children.map(subItem => (
                        <div
                          key={uuidv4()}
                          className="flex ml-3 px-1 items-center rounded-md"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {subItem.external ? (
                            <Disclosure.Button
                              as="a"
                              href={subItem.link}
                              target="_blank"
                              rel="noreferrer"
                              className="focus:outline-none group w-full flex items-center pr-2 pl-2 py-0.5 text-sm font-medium text-nouns-black hover:text-blue-base gap-1"
                            >
                              {subItem.name}

                              <ExternalIcon />
                            </Disclosure.Button>
                          ) : (
                            <Link href={subItem.link}>
                              <a className="focus:outline-none group w-full flex items-center pr-2 pl-2 py-0.5 text-sm font-medium text-nouns-black hover:text-blue-base ">
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
            ))}
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
