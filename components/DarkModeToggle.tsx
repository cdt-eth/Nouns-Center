/* eslint-disable @next/next/no-img-element */
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const isDark = () =>
  //Function that will return boolean if any of the condition is satisfied
  (localStorage && localStorage.theme === "dark") || //Condition 1 - has local storage and theme = dark in local storage is found
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches); //Condition 2 - No theme key in local storage but media color scheme is dark

const getTheme = (isDark) => (isDark ? "dark" : "light"); //Function to return 'dark' or 'light' string

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false); //State for holding theme status

  const toggleMode = () => {
    //onClick handler for changing theme on button press
    localStorage.theme = getTheme(!darkMode); //setting up local storage theme value
    if (localStorage.theme === "dark") {
      // If theme is 'dark'
      document.documentElement.classList.remove("light"); // remove 'light' from html class
      document.documentElement.classList.add("dark"); // add 'dark' to html class
    } else {
      // if not 'dark'
      document.documentElement.classList.remove("dark"); // remove 'dark' from html class
      document.documentElement.classList.add("light"); //add 'light' to html class
    }
    setDarkMode(!darkMode); //set dark mode state to opposite of initial value
  };

  useEffect(() => {
    setDarkMode(isDark()); //before page mount set the value of dark mode by observing theme in local storage
  }, []);

  const darkModeActive =
    process.browser && document.documentElement.classList.contains("dark"); // returns true if its a client and 'dark' is present in html
  // process.browser is deprecated can be written as typeof window === 'undefined'
  return (
    <>
      <Switch
        onChange={toggleMode}
        checked={darkModeActive}
        className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute w-full h-full rounded-md"
        />
        <span
          aria-hidden="true"
          className={classNames(
            darkModeActive
              ? "bg-gray-500 focus:ring-gray-500"
              : "bg-white focus:ring-white",
            "pointer-events-none absolute h-6 w-12 mx-auto rounded-full transition-colors ease-in-out duration-200"
          )}
        />
        <span
          aria-hidden="true"
          className={classNames(
            darkModeActive ? "translate-x-5" : "-translate-x-2",
            "pointer-events-none absolute left-0 inline-block h-8 w-8  rounded-full  shadow transform ring-0 transition-transform ease-in-out duration-200"
          )}
        >
          <img
            src={darkModeActive ? "/darkmode/moon.png" : "/darkmode/sun.png"}
            alt={darkModeActive ? "moon" : "sun"}
          />
        </span>
      </Switch>
    </>
  );
};
export default ThemeSwitch;
