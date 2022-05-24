import React from "react";

interface SubheaderProps {
  title?: string;
  body: any;
}

const Subheader = ({ title, body }: SubheaderProps) => {
  return (
    <div className="sm:flex sm:items-center ">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="my-4 text-md font-medium">{body}</p>
      </div>
    </div>
  );
};

export default Subheader;
