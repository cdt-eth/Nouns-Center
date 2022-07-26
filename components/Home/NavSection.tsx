import React from "react";

interface NavSectionProps {
  title: string;
  body: string;
  cards: React.ReactNode[];
}

const NavSection = ({ title, body, cards }: NavSectionProps) => {
  return (
    <div className="my-10 sm:my-20">
      <h1 className="xs:text-2xl sm:text-4xl tracking-wide text-nouns">
        {title}
      </h1>
      <p className="xs:text-sm sm:text-lg font-medium mt-2 sm:mb-8">{body}</p>

      {/* <div className="flex gap-10">{cards}</div> */}
      <div className="flex gap-10 carousel break-out">{cards}</div>
    </div>
  );
};

export default NavSection;
