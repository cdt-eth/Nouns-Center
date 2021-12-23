import React from "react";
import Asset from "./components/Asset";
import Header from "./components/Header";
import Title from "./components/Title";

const Assets = () => {
  return (
    <div>
      <Header title="Assets | Nouns Center" />
      <Title title="Assets" />

      <div className="flex xs:flex-col sm:flex-row xs:gap-16 sm:gap-40 flex-wrap">
        <Asset title="Color Palette" image="palette.png" file="palette.png" />
        <Asset title="Nountown Font" image="nountown.png" file="nountown.otf" />
        <Asset
          title="Nouns Assets (Photoshop Layers)"
          image="photoshop.png"
          file="assets_psd.zip"
        />
        <Asset
          title="Nouns Assets (PNG)"
          image="assets_png.png"
          file="assets_png.zip"
        />
      </div>
    </div>
  );
};

export default Assets;
