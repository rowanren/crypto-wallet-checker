// wallet.types.ts

// Type definitions for wallet checking functionality

// The Wallet interface represents a cryptocurrency wallet.
interface Wallet {
    id: string;
    balance: number;
    address: string;
}

// The Transaction interface represents a transaction associated with a wallet.
interface Transaction {
    id: string;
    from: string;
    to: string;
    amount: number;
    timestamp: Date;
}

// The WalletChecker interface defines methods for checking wallet status and transactions.
interface WalletChecker {
    checkBalance(wallet: Wallet): Promise<number>;
    getTransactions(wallet: Wallet): Promise<Transaction[]>;
}