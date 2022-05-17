/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleDarkMode = () => {
    var element = document.getElementById("parent");
    element.classList.toggle("dark");
    setEnabled(!enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggleDarkMode}
      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute  w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          // enabled ? "bg-indigo-600" : "bg-gray-200",
          enabled
            ? "bg-gray-500 focus:ring-gray-500"
            : "bg-gray-200 focus:ring-gray-200",
          "pointer-events-none absolute h-6 w-12 mx-auto rounded-full transition-colors ease-in-out duration-200"
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "-translate-x-2",
          "pointer-events-none absolute left-0 inline-block h-8 w-8  rounded-full  shadow transform ring-0 transition-transform ease-in-out duration-200"
        )}
      >
        <img
          src={enabled ? "/darkmode/moon.png" : "/darkmode/sun.png"}
          alt="sun"
        />
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
