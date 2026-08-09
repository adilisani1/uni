const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
app.use(cors());

let cryptoPrices = {};

const generatePrice = (minValue, maxValue) => {
    return Math.min((Math.random() * (maxValue - minValue) + minValue).toFixed(2), maxValue);
};

// How many points to plot per range, and how far apart they sit
const RANGES = {
    '1H': { points: 60, interval: 60 * 1000 },            // one per minute
    '1D': { points: 96, interval: 15 * 60 * 1000 },       // one per 15 minutes
    '1W': { points: 84, interval: 2 * 60 * 60 * 1000 },   // one per 2 hours
    '1M': { points: 60, interval: 12 * 60 * 60 * 1000 },  // one per 12 hours
    '1Y': { points: 73, interval: 5 * 24 * 60 * 60 * 1000 } // one per 5 days
};

const getCryptoPrice = (cryptoName, minValue, maxValue, range) => {
    const { points, interval } = RANGES[range] || RANGES['1D'];
    const cacheKey = `${cryptoName}-${range}`;

    if (!cryptoPrices[cacheKey]) {
        const series = [];
        const now = new Date().getTime();

        // Random-walk the price so the line looks continuous rather than jagged
        let current = generatePrice(minValue, maxValue);
        const drift = (maxValue - minValue) * 0.05;

        for (let i = 0; i < points; i++) {
            if (cryptoName === 'usd') {
                series.push({ time: now - (points - i) * interval, price: 1 });
                continue;
            }

            const step = (Math.random() - 0.5) * 2 * drift;
            current = Math.max(minValue, Math.min(maxValue, Number(current) + step));

            series.push({
                time: now - (points - i) * interval,
                price: Number(current.toFixed(2))
            });
        }

        cryptoPrices[cacheKey] = series;
    }

    return cryptoPrices[cacheKey];
};

app.get('/api/:cryptoName', (req, res) => {
    const cryptoName = req.params.cryptoName;
    let minValue;
    let maxValue;

    switch (cryptoName) {
        case 'eth':
            minValue = 1000;
            maxValue = 2000;
            break;
        case 'usd':
            minValue = 1;
            maxValue = 1;
            break;
        default:
            minValue = 1000;
            maxValue = 3000;
            break;
    }

    const range = (req.query.range || '1D').toUpperCase();
    res.json(getCryptoPrice(cryptoName, minValue, maxValue, range));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
