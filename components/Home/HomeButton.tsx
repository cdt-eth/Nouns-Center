import Link from "next/link";
import React from "react";

interface HomeButtonProps {
  path: string;
  text: string;
}

const HomeButton = ({ path, text }: HomeButtonProps) => {
  return (
    <div className="mt-3 shadow sm:mt-0 sm:ml-3">
      <Link passHref href={`/${path}`}>
        <span className="w-full cursor-pointer flex items-center justify-center xs:px-4 sm:px-8 py-3 border border-transparent text-base font-bold rounded-xl text-gray-800 bg-white border-[#bdc0cf] transition hover:bg-[#d5d7e1] md:py-3 xs:text-sm md:text-md tracking-normal md:px-6">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default HomeButton;
