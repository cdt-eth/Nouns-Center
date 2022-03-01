import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Masonry from "react-masonry-css";

import gifs from "./api/gifs.json";

const Gifs = () => {
  return (
    <div>
      <Header title="Gifs | Nouns Center" />
      <Title title="Gifs" />

      <Masonry
        breakpointCols={{ default: 4, 800: 2 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((g) => (
          <img className="mb-6" src={`/memes/gifs/${g.img}`} />
        ))}
      </Masonry>
    </div>
  );
};

export default Gifs;
