import React from "react";
import Subheader from "../Subheader";

const TextContent = ({ title, children }) => {
  return (
    <div className="my-8">
      <Subheader title={title} />

      {children}
    </div>
  );
};

export default TextContent;
