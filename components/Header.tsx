import React from 'react';
import Head from 'next/head';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title || 'Nouns Center'}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta name="title" content="Nouns Center" />
      <meta
        name="description"
        content="The knowledge center and resource hub for Nouns DAO. Learn about the project, the community and ways to get involved and funded."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nouns.center/" />
      <meta property="og:title" content="Nouns Center" />
      <meta
        property="og:description"
        content="The knowledge center and resource hub for Nouns DAO. Learn about the project, the community and ways to get involved and funded."
      />
      <meta property="og:image" content="https://nouns.center/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nouns.center/" />
      <meta property="twitter:title" content="Nouns Center" />
      <meta
        property="twitter:description"
        content="The knowledge center and resource hub for Nouns DAO. Learn about the project, the community and ways to get involved and funded."
      />
      <meta property="twitter:image" content="https://nouns.center/og-image.png" />
    </Head>
  );
};

export default Header;
