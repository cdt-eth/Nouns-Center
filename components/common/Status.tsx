import React from "react";

interface StatusProps {
  status: string;
  bgColor: string;
}

const Status = ({ status, bgColor }: StatusProps) => {
  return (
    <span
      className={`${bgColor} text-white text-sm font-bold px-2 py-0.5 rounded-md`}
    >
      {status}
    </span>
  );
};

export default Status;
