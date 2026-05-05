import React from 'react';

const WalletChecker: React.FC = () => {
    const [walletAddress, setWalletAddress] = React.useState('');
    const [balance, setBalance] = React.useState<number | null>(null);

    const checkWallet = async () => {
        // Replace with your API call to check the wallet balance
        const response = await fetch(`https://api.example.com/wallet/${walletAddress}`);
        const data = await response.json();
        setBalance(data.balance);
    };

    return (
        <div>
            <h1>Wallet Checker</h1>
            <input 
                type="text" 
                placeholder="Enter wallet address" 
                value={walletAddress} 
                onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button onClick={checkWallet}>Check Balance</button>
            {balance !== null && <p>Wallet Balance: {balance}</p>}
        </div>
    );
};

export default WalletChecker;