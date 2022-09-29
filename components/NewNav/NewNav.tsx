/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from '../common/Button';
import nav from '../../api/nav2.json';
import Mobile from './Mobile';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BiLinkExternal as ExternalIcon } from 'react-icons/bi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NewNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow sm:sticky sm:top-0 sm:z-10	">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex justify-between h-16">
                {/* MOBILE EXPAND ICON */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* EARTH LOGO */}
                {/* <Disclosure.Panel>
                  {({ close }) => ( */}
                <div
                  className="flex-shrink-0 flex items-center cursor-pointer"
                  onClick={() => close()}
                >
                  {/* eslint-disable @next/next/no-html-link-for-pages */}
                  {/* Doing this so the link closes the mobile nav bar */}
                  <a href="/">
                    <img className="block h-10 w-auto" src="/earth.gif" alt="Workflow" />
                  </a>
                </div>
                {/* )}
                 </Disclosure.Panel> */}

                {/* DESKTOP NAV ITEMS */}
                <div className="hidden md:ml-6 sm:flex md:space-x-8 gap-4">
                  {nav.map(section => (
                    <Menu
                      as="div"
                      className="relative flex text-left hover:text-blue-base"
                      key={section.name}
                    >
                      <Menu.Button className="inline-flex justify-center items-center h-full m-auto">
                        {section.name}
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-12	w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {section.children.map(subItem => (
                              <Menu.Item key={subItem.name}>
                                {({ active }) => (
                                  <a
                                    href={subItem.link}
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm',
                                      subItem.external && 'flex items-center gap-2',
                                    )}
                                    target={subItem.external ? '_blank' : '_self'}
                                    rel="noreferrer"
                                  >
                                    {subItem.name}
                                    {subItem.external && <ExternalIcon />}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ))}
                </div>

                {/* GO TO NOUNS BUTTON */}
                <div className="flex items-center flex-shrink-0">
                  <Button link="https://nouns.wtf/" text="nouns.wtf" small />
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
