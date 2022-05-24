import React from "react";
import { useCallback, useEffect, useState } from "react";

import Fountain from "./NounishGlassesPop";

interface HomeButtonProps {
  path: string;
  text: string;
  buttonId: string | number;
}

const HomeButton = ({ path, text, buttonId }: HomeButtonProps) => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    new Fountain({ buttonId: buttonId.toString() });
  }, [buttonId]);

  const animation = useCallback(async () => {
    setAnimate(true);
    //do something
    // buttonAction();
  }, []);

  return (
    <div className="mt-3 shadow sm:mt-0 sm:ml-3">
      <div className="" id={"nounish_button"}>
        <button
          className="w-full cursor-pointer flex items-center justify-center xs:px-4 sm:px-8 py-3 border border-transparent text-base font-bold rounded-xl text-gray-800 bg-white border-[#bdc0cf] transition hover:bg-[#d5d7e1] md:py-3 xs:text-sm md:text-md tracking-normal md:px-6"
          disabled={false}
          onClick={() => {
            animation();
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default HomeButton;
