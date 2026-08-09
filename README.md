# Uniswap Interface Clone

A front-end recreation of the [Uniswap](https://app.uniswap.org) decentralized exchange, built with React. It reproduces the app's swap flow, token explorer, NFT marketplace, liquidity provisioning and governance pages, including light/dark theming and responsive layouts.

This is a **UI/UX portfolio project**. There is no blockchain connection — token prices, NFT collections and chart data come from local fixtures and a small Express server, and wallet connection is simulated. See [Scope](#scope) below.

## Screens

| Route | What it does |
| --- | --- |
| `/` | Landing page with the hero swap card and feature sections |
| `/swap` | Swap and Buy tabs, token selection, live pair conversion, slippage/deadline settings |
| `/tokens` | Sortable token table with price, volume and TVL |
| `/tokens/:id` | Token detail page with an interactive price chart (1H–1Y) and stats |
| `/nfts` | Trending NFT collections, carousel, currency and timeframe filters |
| `/nfts/:id` | Collection page with item grid, search, sorting and an add-to-bag cart |
| `/pools` | Liquidity positions overview |
| `/liquidity` | Add-liquidity flow: fee tier, price range, deposit amounts, distribution chart |
| `/vote` | Governance proposal listing |
| `/privacy` | Privacy policy modal page |

## Features

- **Swap** — bidirectional conversion between any two tokens; typing in either field derives the other. The switch arrow swaps both tokens and amounts.
- **Buy tab** — fiat-denominated entry with preset amounts and a live token estimate.
- **Settings** — UniswapX toggle, local routing, max slippage (auto/custom) and transaction deadline, each with working expand/collapse.
- **Price chart** — hover to scrub the series; the header price and timestamp track the cursor. Timeframe buttons refetch at the matching resolution.
- **NFT marketplace** — collection browsing, search by name or token id, price sorting, and a persistent bag stored in `localStorage`.
- **Liquidity** — fee tier selection, price range with steppers, paired deposit amounts, and a liquidity distribution bar chart that highlights the selected range.
- **Theming** — light and dark themes driven by CSS custom properties, persisted to `localStorage` via the `data-theme` attribute on the app root.

## Tech stack

| | |
| --- | --- |
| Framework | React 18 (Create React App) |
| Routing | React Router 6 |
| Charts | Recharts (line), ApexCharts (bar) |
| Carousel | react-slick |
| Mock API | Express + CORS |
| Icons | Remix Icon (CDN) |
| Styling | Plain CSS with custom properties |

## Getting started

Requires Node.js 18+ (developed on Node 22).

```bash
npm install
npm start
```

`npm start` runs the React dev server and the mock API together via `concurrently`:

- App — http://localhost:3000
- Mock API — http://localhost:3001

The token detail chart reads from the mock API. If you run only `npm run client`, the chart will be empty and you'll see a fetch error in the console.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the client and mock API together |
| `npm run client` | React dev server only |
| `npm run server` | Mock price API only |
| `npm run build` | Production build to `build/` |
| `npm test` | Run tests in watch mode |

## Mock API

A small Express server in `src/service/server.js` generates plausible price series.

```
GET /api/:cryptoName?range=1H|1D|1W|1M|1Y
```

Returns `[{ time, price }]`. Point count and spacing vary by range (60 one-minute points for `1H`, 73 five-day points for `1Y`, and so on). Prices follow a random walk within a per-token band so the series reads as a continuous chart rather than noise. Results are cached per token and range for the lifetime of the process.

## Project structure

```
src/
├── components/      Navbar, Footer, Cart, Modal, TokenDetails
├── pages/           Home, Swap, Tokens, Pools, Nfts, NftsDetails, Vote
├── utils/           SwapModal, SettingModal, LiquidityModal, PrivacyModal
├── service/         Static fixtures + Express mock server
├── App.js           Routes and shared state
└── index.css        Theme custom properties (light/dark)
```

Most shared state — selected tokens, swap amounts, cart contents, theme — lives in `App.js` and is passed down as props.

## Scope

Deliberately out of scope, since this is a UI project:

- No wallet integration. "Connect Wallet" opens the wallet picker and simulates a connection; no web3 provider is involved.
- No real trades, approvals, or on-chain transactions.
- Token prices in `src/service/swapTokens.js` are placeholders and not market-accurate. Conversion maths is correct, but the underlying numbers are illustrative.
- NFT and collection data is static fixture data in `src/service/`.

## Credits

Design and branding belong to [Uniswap Labs](https://uniswap.org). This clone is an independent build for learning and portfolio purposes, not affiliated with or endorsed by Uniswap Labs.
