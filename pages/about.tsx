import React, { useState } from "react";

import { MenuIcon } from "@heroicons/react/outline";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";

const about = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      {/* Mobile */}
      <div>
        <MobileMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Nav />
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="flex-1 bg-black ">
            <div className="py-6 h-screen">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-400">
                  Dashboard
                </h1>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                {/* Replace with your content */}
                {/* Replace with your content */}

                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>

                {/* /End replace */}
                {/* /End replace */}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default about;
