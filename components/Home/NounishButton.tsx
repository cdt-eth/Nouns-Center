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
  color: string;
}> = (props) => {
  let { buttonId, buttonAction, text, path, image, color } = props;

  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    new Fountain({ buttonId: buttonId.toString() });
  }, []);

  const animation = useCallback(async () => {
    setAnimate(true);

    buttonAction();
  }, []);

  return (
    <Link passHref href={`/${path}`}>
      <div className="mt-3 sm:mt-0">
        <div className="nounish_button" id={buttonId.toString()}>
          <button
            disabled={false}
            onClick={() => {
              animation();
            }}
            className="group block text-nouns rounded-xl sm:cursor-pointer transition duration-200 xs:h-40 xs:w-40 sm:h-48 sm:w-48 bg-gray-100 focus-within:ring-2 relative focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:ring-2 hover:ring-grey-base focus-within:ring-grey-base overflow-hidden m-auto"
          >
            <div
              className={`absolute bottom-0 w-full px-4 py-1 justify-center text-lg flex items-end ${color} font-light text-white shadow-lg`}
            >
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
    </Link>
  );
};

export default Home;
