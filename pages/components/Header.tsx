import React from "react";
import Head from "next/head";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        rel="stylesheet"
      />
      {/* <link
        type="text/css"
        rel="stylesheet"
        href="/pages/components/Game/Dino.module.css"
      /> */}
    </Head>
  );
};

export default Header;
