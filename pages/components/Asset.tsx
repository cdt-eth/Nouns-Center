import React from "react";
import DownloadButton from "./DownloadButton";

interface AssetProps {
  title: string;
  image: string;
  file: string;
}

const Asset = ({ title, image, file }: AssetProps) => {
  return (
    <div className="flex items-center justify-center flex-col sm:w-1/3 xs:mb-20">
      <p className="text-nouns text-lg text-center">{title}</p>

      <img className="mb-2" src={`/assets/${image}`} alt={image} />

      <DownloadButton text="Download" file={`/assets/${file}`} />
    </div>
  );
};

export default Asset;
