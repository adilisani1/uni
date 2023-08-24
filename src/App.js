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

//Tokens Data
import { allTableData, updateTime, options, chartData } from "./service/tokens";
import { optionsLabel, searchOptions } from "./service/navbar";


function App() {

  //SideBarConnectModal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Swap Modal
  const [swapModal, setSwapModal] = useState(false);

  //Privacy Modal
  const [privacyModal, setPrivacyModal] = useState(false)

  //NFT BAG 
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCart = () => {
    setIsCartVisible(!isCartVisible)
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
          handleCart={handleCart}

        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/swap" element={<Swap swapModal={swapModal} setSwapModal={setSwapModal} setIsModalOpen={setIsModalOpen} />} />
            <Route path="/tokens" element={<Token allTableData={allTableData} updateTime={updateTime} options={options} />} />
            <Route path="/pools" element={<Pools setIsModalOpen={setIsModalOpen} />} />
            <Route path="/nfts" element={<Nfts isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} handleCart={handleCart} />} />
            <Route path="/tokens/:id" element={<TokenDetails allTableData={allTableData} chartData={chartData} />} />
            <Route path="/nfts/:id" element={<NftsDetails />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/privacy" element={<PrivacyModal />} />
            <Route path="/liquidity" element={<LiquidityModal chartData={chartData} swapModal={swapModal} setSwapModal={setSwapModal} />} />
          </Routes>
        </div >

      </>
    </div>
  );
}




export default App;

