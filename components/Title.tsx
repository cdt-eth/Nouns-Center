import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <div className="text-4xl text-nouns pb-6 tracking-wide">{title}</div>;
};

export default Title;
