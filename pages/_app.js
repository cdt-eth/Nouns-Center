import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import '@algolia/autocomplete-theme-classic';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

const { chains, provider } = configureChains([chain.mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Nouns Center',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// const searchClient = algoliasearch(
//   "PGIH0KF5F5",
//   "faf1987de1d83c02e82fbf9bfd7ca5a9"
// );

// autocomplete({
//   container: "#autocomplete",
//   placeholder: "Search repositories",
// });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      {/* {asPath === "/" && <div id="autocomplete"></div>} */}
    </Layout>
  );
}

export default MyApp;
