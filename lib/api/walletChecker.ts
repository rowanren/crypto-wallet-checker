import axios from 'axios';

export default class WalletChecker {
    static async checkBalance(walletAddress) {
        try {
            const response = await axios.get(`https://api.crypto.com/v1/balance?address=${walletAddress}`);
            return response.data;
        } catch (error) {
            console.error('Error checking balance:', error);
            throw new Error('Could not retrieve wallet balance');
        }
    }
}