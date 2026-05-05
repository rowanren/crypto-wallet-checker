// bitcoinApi.ts

// Define a type for the API response
interface BitcoinApiResponse {
    price: number;
    time: string;
}

// Real API endpoint
const realApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

// Mock data for development
const mockData: BitcoinApiResponse = {
    price: 60000,
    time: '2026-05-05T09:33:00Z'
};

// Function to fetch real or mock data based on the environment
async function fetchBitcoinData(useMock: boolean = false): Promise<BitcoinApiResponse> {
    if (useMock) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockData), 1000);
        });
    } else {
        const response = await fetch(realApiUrl);
        const data = await response.json();
        return {
            price: data.bpi.USD.rate_float,
            time: data.time.updated,
        };
    }
}

// Exporting the fetch function for use in other modules
export { fetchBitcoinData };