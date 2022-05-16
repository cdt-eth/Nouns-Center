/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-nouns-blue" : "bg-gray-200",
        "relative inline-flex flex-shrink-0 h-7 w-12 pl-0.5 items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nouns-blue"
      )}
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-transparent  transform ring-0 transition ease-in-out duration-200"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <img src="/darkmode/sun.png" alt="sun" />
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <img src="/darkmode/moon.png" alt="sun" />
        </span>
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
