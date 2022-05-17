/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Fountain from "./NounishGlassesPop";

export const Home: React.FC<{
  buttonId: string | number;
  buttonAction: () => void;
  text: string;
  path: string;
  image: string;
}> = (props) => {
  let { buttonId, buttonAction, text, path, image } = props;
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    new Fountain({ buttonId: buttonId.toString() });
  }, []);

  const animation = useCallback(async () => {
    setAnimate(true);
    //do something
    buttonAction();
  }, []);

  return (
    // <div className="flex self-center justify-center origin-center py-80">
    //   <div className="flex">
    // <div className="mt-3 shadow sm:mt-0 sm:ml-3">
    <Link passHref href={`/${path}`}>
      <div className="mt-3 sm:mt-0">
        <div className="nounish_button" id={buttonId.toString()}>
          {/* <button
            className="w-full cursor-pointer flex items-center justify-center xs:px-4 sm:px-8 py-3 
            text-base font-bold rounded-xl text-gray-800 bg-white border border-transparent border-[#bdc0cf] hover:bg-[#d5d7e1] md:py-3 xs:text-sm md:text-md tracking-normal md:px-6 transition"
            disabled={false}
            onClick={() => {
              animation();
            }}
          >
            {text}
          </button> */}

          <div className="">
            <button
              disabled={false}
              onClick={() => {
                animation();
              }}
              className="group block text-nouns rounded-xl sm:cursor-pointer transition duration-200 xs:h-40 xs:w-40 sm:h-48 sm:w-48 bg-gray-100 focus-within:ring-2 relative focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:ring-2 hover:ring-grey-base focus-within:ring-grey-base overflow-hidden ho"
            >
              <div className="absolute h-full w-full  px-4 pb-2 justify-center text-lg flex items-end gradient2 font-light text-white shadow-lg">
                {text}
              </div>
              <img
                className="object-cover w-full h-full"
                src={`/home/${image}`}
                alt={text}
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
    // </div>
    // </div>
    // </div>
  );
};

export default Home;
