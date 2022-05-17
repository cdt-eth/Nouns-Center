import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Fountain from "./NounishGlassesPop";

export const Home: React.FC<{
  buttonId: string | number;
  buttonAction: () => void;
  text: string;
  path: string;
}> = (props) => {
  let { buttonId, buttonAction, text, path } = props;
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
      <div className="mt-3  sm:mt-0 sm:ml-3 ">
        <div className="nounish_button" id={buttonId.toString()}>
          <button
            className="w-full cursor-pointer flex items-center justify-center xs:px-4 sm:px-8 py-3 
            text-base font-bold rounded-xl text-gray-800 bg-white border border-transparent border-[#bdc0cf] hover:bg-[#d5d7e1] md:py-3 xs:text-sm md:text-md tracking-normal md:px-6 transition"
            disabled={false}
            onClick={() => {
              animation();
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </Link>
    // </div>
    // </div>
    // </div>
  );
};

export default Home;
