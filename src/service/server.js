const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
app.use(cors());

let cryptoPrices = {};

const generatePrice = (minValue, maxValue) => {
    return Math.min((Math.random() * (maxValue - minValue) + minValue).toFixed(2), maxValue);
};

const getCryptoPrice = (cryptoName, minValue, maxValue) => {
    if (!cryptoPrices[cryptoName]) {
        // Generate prices for the past 10 hours.
        cryptoPrices[cryptoName] = [];
        for (let i = 0; i < 10; i++) {
            if (cryptoName === 'usd') {
                cryptoPrices[cryptoName].push({
                    time: new Date().getTime() - (10 - i) * 3600000,
                    price: 1
                });
            } else {
                cryptoPrices[cryptoName].push({
                    time: new Date().getTime() - (10 - i) * 3600000,
                    price: generatePrice(minValue, maxValue)
                });
            }
        }
    }

    return cryptoPrices[cryptoName];
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

    res.json(getCryptoPrice(cryptoName, minValue, maxValue));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
