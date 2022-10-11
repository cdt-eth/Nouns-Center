import Link from 'next/link';
import React from 'react';
import { BiLinkExternal as ExternalIcon } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import { Disclosure } from '@headlessui/react';
import navigationData from './navigation.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Mobile = () => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="pt-2 px-4 pb-3 space-y-1">
        <Disclosure.Panel>
          {({ close }) => (
            <div>
              {navigationData.map(item => (
                <Disclosure as="div" defaultOpen key={item.name} className="space-y-1 mb-4">
                  {({ open: open2 }) => (
                    <>
                      <Disclosure.Button
                        as="button"
                        className={classNames(
                          item.current
                            ? 'text-black focus:outline-none'
                            : 'text-black hover:bg-opacity-80  hover:text-blue-base',
                          'group w-full flex items-center text-nouns tracking-wide text-left xs:text-lg sm:text-lg font-medium rounded-md focus:outline-none transition duration-150',
                        )}
                      >
                        <svg
                          className={classNames(
                            open2 ? 'text-black rotate-90' : 'text-black',
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
                            onClick={() => close()}
                            key={uuidv4()}
                            className="flex ml-3 px-1 items-center rounded-md"
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
          )}
        </Disclosure.Panel>
      </div>
    </Disclosure.Panel>
  );
};

export default Mobile;
