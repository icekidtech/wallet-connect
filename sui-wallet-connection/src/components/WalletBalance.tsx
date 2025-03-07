import { useEffect, useState } from 'react';
import { useCurrentWallet } from '@mysten/dapp-kit'; // Use useCurrentWallet
import { SuiClient, getFullnodeUrl } from '@mysten/sui/client';

function WalletBalance() {
  const { connectionStatus, currentWallet } = useCurrentWallet(); // Use useCurrentWallet
  const [balance, setBalance] = useState<string>('0');

  useEffect(() => {
    if (connectionStatus === 'connected' && currentWallet) {
      const client = new SuiClient({ url: getFullnodeUrl('mainnet') });
      const address = currentWallet.accounts[0].address; // Get the wallet address
      client.getBalance({ owner: address }).then((balance: { totalBalance: string }) => {
        setBalance(balance.totalBalance);
      });
    }
  }, [connectionStatus, currentWallet]);

  return (
    <div className="balance">
      {connectionStatus === 'connected' ? (
        <p>Your balance: {balance} SUI</p> /* Display the balance */
      ) : (
        <p className="wallet-prompt">Connect your wallet to view your balance.</p> // Prompt to connect
      )}
    </div>
  );
}

export default WalletBalance;