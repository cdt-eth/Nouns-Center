import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import traits from "./api/traits.json";
const Traits = () => {
  const heads = traits.heads;
  const glasses = traits.glasses;
  const bodies = traits.bodies;
  const accessories = traits.accessories;

  return (
    <div className="">
      <Header title="Traits | Nouns Center" />
      <Title title="Traits" />

      <div className="bg-nouns-cool py-6 xs:px-1 sm:px-4 rounded-xl">
        <h1 className="text-5xl text-nouns mb-6 text-center text-nouns-cool-text">
          Heads
        </h1>
        <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
          {heads &&
            heads.map((head) => (
              <div className="flex flex-col items-center mb-8">
                <img src={`/traits/heads/head-${head.image}.png`} />
                <p className="text-nouns text-nouns-cool-text text-center tracking-wider xs:text-sm sm:text-lg">
                  {head.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Traits;
