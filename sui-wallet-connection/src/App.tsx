import { SuiClientProvider, WalletProvider, ConnectButton } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import WalletBalance from './components/WalletBalance';
import './styles/App.css';

function App() {
  return (
    <SuiClientProvider networks={{ mainnet: { url: getFullnodeUrl('mainnet') } }} defaultNetwork="mainnet">
      <WalletProvider>
        <div className="app">
          <h1>Sui Wallet Connection</h1>
          <ConnectButton className="connect-button" /> {/* ConnectButton for wallet connection and disconnection */}
          <WalletBalance /> {/* Display the wallet balance */}
        </div>
      </WalletProvider>
    </SuiClientProvider>
  );
}

export default App;