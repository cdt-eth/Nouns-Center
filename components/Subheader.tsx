import React from "react";

interface SubheaderProps {
  title?: string;
  body?: string | any;
}

const Subheader = ({ title, body }: SubheaderProps) => {
  return (
    <div className="sm:flex sm:items-center ">
      <div className="sm:flex-auto mb-4">
        {title && <h1 className="text-xl font-semibold capitalize">{title}</h1>}
        {body && (
          <p className={`text-md font-medium ${title && "mt-4"}`}>{body}</p>
        )}
      </div>
    </div>
  );
};

export default Subheader;
