import React from "react";

const Newsletter = () => {
  return (
    <div className="">
      <div className="max-w-7xl w-11/12 mx-auto xs:py-6 sm:py-12  lg:py-0 flex xs:flex-col sm:flex-row xs:items-center">
        <div className="pb-4">
          <h2
            className="text-xl font-extrabold tracking-tight text-white sm:text-lg"
            id="newsletter-headline"
          >
            Sign up for the{" "}
            <span className="text-nouns tracking-wider">Nounsletter</span>
          </h2>
          {/* <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p> */}
        </div>
        <iframe
          src="https://nouns.substack.com/embed"
          width="350"
          height="80"
          className=""
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Newsletter;
