import React, { useEffect } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';

interface WalletButtonProps {
  showBalance: boolean;
}

const WalletButton = ({ showBalance }: WalletButtonProps) => {
  const { isDisconnected } = useAccount();

  useEffect(() => {
    const doLogout = async () => {
      await fetch('/api/logout');
    };
    if (isDisconnected) {
      doLogout();
    }
  }, [isDisconnected]);
  return <ConnectButton showBalance={showBalance} />;
};

export default WalletButton;
