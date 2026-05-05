import { NextApiRequest, NextApiResponse } from 'next';

export default async function batchCheck(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { walletAddresses } = req.body;
    if (!walletAddresses || !Array.isArray(walletAddresses)) {
        return res.status(400).json({ message: 'Invalid wallet addresses' });
    }

    const results = walletAddresses.map((address: string) => ({
        address,
        balance: Math.random() * 5,
        isValid: address.length > 20,
        checked: new Date().toISOString(),
    }));

    return res.status(200).json({ success: true, data: results });
}