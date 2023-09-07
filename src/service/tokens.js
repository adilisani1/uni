export const options = [
    { value: 'etheruim', imgSrc: '/assets/images/tokens/eth-icon.png', label: 'Ethereum' },
    { value: 'polygon', imgSrc: '/assets/images/tokens/polygon.svg', label: 'Polygon' },
    { value: 'arbitrum', imgSrc: '/assets/images/tokens/arbitrum.svg', label: 'Arbitrum' },
    { value: 'optimistic', imgSrc: '/assets/images/tokens/optimistic.svg', label: 'Optimistic' },
    { value: 'celo', imgSrc: '/assets/images/tokens/celo.svg', label: 'Celo' },
    { value: 'bnbchain', imgSrc: '/assets/images/tokens/bnb.svg', label: 'BNB Chain' },
    { value: 'avalanche', imgSrc: '/assets/images/tokens/avax.svg', label: 'Avalanche' },
    { value: 'base', imgSrc: '/assets/images/tokens/base.svg', label: 'Base' },
];


export const updateTime = [
    { value: "1h", label: '1H', duration: 3600000 }, // 1 hour in milliseconds
    { value: "1d", label: '1D', duration: 86400000 }, // 1 day in milliseconds
    { value: "1w", label: '1W', duration: 604800000 }, // 1 week in milliseconds
    { value: "1m", label: '1M', duration: 2592000000 }, // 1 month in milliseconds
    { value: "1y", label: '1Y', duration: 31536000000 }, // 1 year in milliseconds

]

export const allTableData = [
    {
        id: 1,
        name: 'Ether',
        symbol: 'ETH',
        image: '/assets/images/tokens/eth-icon.png',
        price: 1847.65,
        oldPrice: 1720.65,
        tvl: 1200000000,
        volume: 257.0,
        label: 'Ethereum',
        bioData: "Ethereum is a smart contract platform",
        api: 'http://localhost:3001/api/eth'
    },

    {
        id: 2,
        name: 'USD Coin',
        symbol: 'USDC',
        image: '/assets/images/usdt-polygon-icon.png',
        price: 1.00,
        oldPrice: 1.00,
        tvl: 6170000,
        volume: 149.4,
        label: 'Ethereum',
        bioData: "USDC is a fully collateralized US dollar stablecoin. USDC is the bridge between dollars and trading on cryptocurrency exchanges.  ",
        api: 'http://localhost:3001/api/usd'
    },
]


