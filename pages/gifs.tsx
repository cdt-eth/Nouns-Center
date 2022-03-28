/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
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
          <img
            key={uuidv4()}
            className="mb-6"
            src={`/memes/gifs/${g.img}`}
            alt="gif"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gifs;
