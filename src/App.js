import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import Swap from "./pages/Swap/Swap";
import Token from "./pages/Tokens/Token";
import Pools from "./pages/Pools/Pools";
import Nfts from "./pages/Nfts/Nfts";
import PrivacyModal from './utils/PrivacyModal/PrivacyModal';
import Vote from "./pages/Vote/Vote";
import LiquidityModal from "./utils/LiquidityModal/LiquidityModal";
import NftsDetails from "./pages/NftsDetails/NftsDetails";

import "./App.css";
import useLocalStorage from "use-local-storage";
import TokenDetails from "./components/TokenDetails/TokenDetails";



//Navbar Data
import { optionsLabel, searchOptions } from "./service/navbar";
//Tokens Data
import { allTableData, updateTime, options, chartData } from "./service/tokens";
//Swap Modal Tokens Data
import { swapTokens } from "./service/swapTokens";


import SettingModal from "./utils/SettingModal/SettingModal";
import { allTableDataETH, allTableDataUSD } from "./service/nfts";

function App() {

  //SideBarConnectModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Swap Modal
  const [swapModal, setSwapModal] = useState(false);

  //Privacy Modal
  const [privacyModal, setPrivacyModal] = useState(false);

  //NFT BAG 
  const [isCartVisible, setIsCartVisible] = useState(false);

  //Swap .js
  const [selectedToken, setSelectedToken] = useState(swapTokens[0]);
  const [selectedTokenSecond, setSelectedTokenSecond] = useState({ symbol: 'Select Token' });
  const [currentCurrencyId, setCurrentCurrencyId] = useState(null);


  const [liquidityTokenOne, setLiquidityTokenOne] = useState(swapTokens[0]);
  const [liquidityTokenTwo, setLiquidityTokenTwo] = useState({ symbol: 'Select Token' });

  const [currency, setCurrency] = useState('ETH');
  const [showCartBag, setShowCartBag] = useState(false); // Add this state

  //Swap Modal Func
  const handleSwapModal = (currencyId) => {
    setSwapModal(true);
    setCurrentCurrencyId(currencyId);
  }

  //Cart
  const handleCart = () => {
    setIsCartVisible(!isCartVisible)
  }
  //Swaptokensfunc

  const handleTokenSelect = (token) => {
    const newToken = { ...token };
    if (currentCurrencyId === "ethId") {
      setSelectedToken(newToken);
    } else {
      setSelectedTokenSecond(newToken);
    }
    setSwapModal(false);
  }
  //SwapTokensfunc-liquidty0

  const handleLiquidityTokenSelect = (token) => {
    const newToken = { ...token };
    if (currentCurrencyId === "liquidityEthId") {
      setLiquidityTokenOne(newToken);
    } else {
      setLiquidityTokenTwo(newToken);
    }
    setSwapModal(false);
  }


  const handleSelect = (token, isLiquidity) => {
    if (isLiquidity) {
      handleLiquidityTokenSelect(token);
    } else {
      handleTokenSelect(token);
    }
    setSwapModal(false);
  }

  // Theme 
  const [theme, setTheme] = useLocalStorage('light', 'dark');
  function switchTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (

    <div className="App" data-theme={theme}>
      <>
        <Navbar
          optionsLabel={optionsLabel}
          searchOptions={searchOptions}
          switchTheme={switchTheme}
          currentTheme={theme}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          privacyModal={privacyModal}
          setPrivacyModal={setPrivacyModal}
          handleCart={handleCart} showCartBag={showCartBag}

        />
        <div>
          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route path="/swap" element={<Swap
              swapTokens={swapTokens}
              handleSwapModal={handleSwapModal}
              swapModal={swapModal}
              setSwapModal={setSwapModal}
              setIsModalOpen={setIsModalOpen}
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
              selectedTokenSecond={selectedTokenSecond}
              setSelectedTokenSecond={setSelectedTokenSecond}
              // handleTokenSelect={handleTokenSelect}
              handleSelect={(token, isLiquidity) => handleSelect(token, isLiquidity)}
              currentCurrencyId={currentCurrencyId} />}
              setCurrentCurrencyId={setCurrentCurrencyId} />

            <Route path="/tokens" element={<Token allTableData={allTableData} updateTime={updateTime} options={options} />} />
            <Route path="/pools" element={<Pools setIsModalOpen={setIsModalOpen} />} />
            <Route path="/nfts" element={<Nfts
              isCartVisible={isCartVisible}
              setIsCartVisible={setIsCartVisible}
              handleCart={handleCart}
              allTableDataETH={allTableDataETH}
              allTableDataUSD={allTableDataUSD}
              currency={currency}
              setCurrency={setCurrency}
            />} />
            <Route path="/tokens/:id" element={<TokenDetails allTableData={allTableData} chartData={chartData} />} />
            <Route path="/nfts/:id" element={<NftsDetails allTableDataETH={allTableDataETH} allTableDataUSD={allTableDataUSD} currency={currency} setCurrency={setCurrency} />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/privacy" element={<PrivacyModal />} />
            <Route path="/liquidity" element={<LiquidityModal
              chartData={chartData}
              swapTokens={swapTokens}
              handleSwapModal={handleSwapModal}
              swapModal={swapModal}
              setSwapModal={setSwapModal}
              currentCurrencyId={currentCurrencyId}
              setCurrentCurrencyId={setCurrentCurrencyId}
              handleSelect={(token, isLiquidity) => handleSelect(token, isLiquidity)}
              selectedToken={selectedToken}
              liquidityTokenOne={liquidityTokenOne}
              liquidityTokenTwo={liquidityTokenTwo}

            />} />
            <Route path="/settings" element={<SettingModal />} />

          </Routes>
        </div >

      </>
    </div>
  );
}




export default App;

