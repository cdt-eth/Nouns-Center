import React from "react";
import HomeButton from "./HomeButton";
import NounishButton from "./NounishButton";

const ButtonGroup = () => {
  const buttonsText = [
    { path: "projects", text: "View Projects", buttonId: "one" },
    { path: "assets", text: "Download Assets", buttonId: "two" },
    { path: "funding", text: "Get Funding", buttonId: "three" },
    { path: "Dev", text: "Dev Resources", buttonId: "four" },
    { path: "History", text: "History of Nouns", buttonId: "five" },
    { path: "Traits", text: "View Traits", buttonId: "six" },
  ];

  const action = () => {
    //on click action to pass to button
  };
  return (
    <div className="mt-5 mx-auto xs:grid grid-cols-2 xs:gap-3 sm:gap-0 sm:flex sm:justify-center md:mt-8">
      {buttonsText.map((button, idx) => (
        <HomeButton
          key={idx}
          path={button.path}
          text={button.text}
          buttonId={button.buttonId}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
