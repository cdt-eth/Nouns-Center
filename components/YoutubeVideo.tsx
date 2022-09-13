import React from "react";

const YoutubeVideo = ({ title, description, embedId }) => (
  <div className="block">
    <div className="pb-2">
      <p className="text-lg sm:text-2xl text-nouns">{title}</p>
    </div>

    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>

    <p className="text-xs pt-2 sm:text-sm italic ">{description}</p>
  </div>
);

export default YoutubeVideo;
