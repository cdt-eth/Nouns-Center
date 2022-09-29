import React from 'react';

const Newsletter = () => {
  return (
    <div className="">
      <div className="max-w-7xl w-11/12 mx-auto xs:py-2 sm:py-12 lg:py-0 flex xs:flex-col sm:flex-row xs:items-center">
        <div className="pb-4">
          <h2
            className="text-xl font-extrabold tracking-tight text-black sm:text-lg"
            id="newsletter-headline"
          >
            Sign up for the <span className="text-nouns tracking-wider">Nounsletter</span>
          </h2>
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
