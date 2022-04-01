import React from "react";
import Grid from "../components/Dev/Grid";
import Header from "../components/Header";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import Title from "../components/Title";

const Dev = () => {
  return (
    <div>
      <Header title="Dev | Nouns Center" />
      <Title title="Dev" />

      <SubheaderBodyButton
        title="Developer Resources"
        body="Repository of trait assets, fonts, and other resources you may need to work with Nouns. If you're still looking for something that's not here click the button and let me know."
        btnLink="https://github.com/nounsDAO/nouns-monorepo/discussions/new"
        btnText="Ask A Question"
      />

      <Grid />
    </div>
  );
};

export default Dev;
