import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isModalOpen, setIsModalOpen, switchTheme }) => {
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    const handleButtonClick = () => {
        setSecondModalOpen(true);
    };

    const [sunClicked, setSunClicked] = useState(false);

    const [allowLightTheme, setAllowLightTheme] = useState(true);


    const [activeTheme, setActiveTheme] = useState('dark'); // Default to light theme

    const handleSunClick = () => {
        if (allowLightTheme) {
            switchTheme('light');
            setAllowLightTheme(false);
            setActiveTheme('light');
        }
    };

    const handleMoonClick = () => {
        if (!allowLightTheme) {
            switchTheme('dark');
            setAllowLightTheme(true);
            setActiveTheme('dark');
        }
    };

    // Determine the current theme state (you need to have a way to track this)


    return (
        <>
            <div className={`sc-3dvm1v-2 dLsVJq ${isModalOpen ? 'open' : ''}`}>
                <div
                    data-testid="close-account-drawer"
                    className={`sc-3dvm1v-5 hVzdzS`}
                    onClick={() => setIsModalOpen(false)} >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sc-3dvm1v-4 jEKWjE"
                    >
                        <polyline points="13 17 18 12 13 7" />
                        <polyline points="6 17 11 12 6 7" />
                    </svg>
                </div>

                <div className={`sc-3dvm1v-0 eTxptr `}></div>
                <div className={`sc-3dvm1v-3 hyeENl`}>

                    <div id="wallet-dropdown-scroll-wrapper" className="sc-3dvm1v-1 fijsNj">

                        <div className="sc-1kykgp9-0 sc-11yue4p-0 iCxowP kfarYJ">
                            {isModalOpen && (
                                <div data-testid="wallet-modal" className="sc-1hmbv05-0 jcIclM">
                                    <div
                                        width="100%"
                                        className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 laNPNA fsgYBU NRTGQ"
                                    >
                                        <div className="sc-sx9n2y-0 kivXvb css-rjqmed" >
                                            Connect a wallet
                                        </div>
                                        <button
                                            data-testid="wallet-settings"
                                            className="sc-u2uow0-2 kIafUC"
                                            onClick={handleButtonClick}>
                                            <span className="sc-u2uow0-3 bLwPSk">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx={12} cy={12} r={3} />
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="sc-1kykgp9-2 kqzAOQ">
                                        <div data-testid="option-grid" className="sc-1hmbv05-1 hmenal">
                                            <div className="sc-us24id-4 hKmnVf">
                                                <button
                                                    data-testid="wallet-option-UNISWAP_WALLET_V2"
                                                    className="sc-us24id-1 fRrCJL"
                                                >
                                                    <div className="sc-us24id-0 fFbTKE">
                                                        <div className="sc-us24id-3 cyjnfZ">
                                                            <img
                                                                src="assets/images/uniswap-wallet-icon.png"
                                                                alt="Uniswap Wallet"
                                                            />
                                                        </div>
                                                        <div className="sc-us24id-2 kJBdbk">Uniswap Wallet</div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="sc-us24id-4 hKmnVf">
                                                <button
                                                    data-testid="wallet-option-INJECTED"
                                                    className="sc-us24id-1 fRrCJL"
                                                >
                                                    <div className="sc-us24id-0 fFbTKE">
                                                        <div className="sc-us24id-3 cyjnfZ">
                                                            <img
                                                                src="assets/images/metamask-icon.svg"
                                                                alt="MetaMask"
                                                            />
                                                        </div>
                                                        <div className="sc-us24id-2 kJBdbk">MetaMask</div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="sc-us24id-4 hKmnVf">
                                                <button
                                                    data-testid="wallet-option-WALLET_CONNECT_V2"
                                                    className="sc-us24id-1 fRrCJL"
                                                >
                                                    <div className="sc-us24id-0 fFbTKE">
                                                        <div className="sc-us24id-3 cyjnfZ">
                                                            <img
                                                                src="assets/images/walletconnect-icon.svg"
                                                                alt="WalletConnect"
                                                            />
                                                        </div>
                                                        <div className="sc-us24id-2 kJBdbk">WalletConnect</div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="sc-us24id-4 hKmnVf">
                                                <button
                                                    data-testid="wallet-option-COINBASE_WALLET"
                                                    className="sc-us24id-1 fRrCJL"
                                                >
                                                    <div className="sc-us24id-0 fFbTKE">
                                                        <div className="sc-us24id-3 cyjnfZ">
                                                            <img
                                                                src="assets/images/coinbase-icon.svg"
                                                                alt="Coinbase Wallet"
                                                            />
                                                        </div>
                                                        <div className="sc-us24id-2 kJBdbk">Coinbase Wallet</div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="sc-1hmbv05-2 ilYVNX">
                                            <div className="sc-sx9n2y-0 bftkTM css-4u0e4f">
                                                By connecting a wallet, you agree to Uniswap Labs'{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://uniswap.org/terms-of-service/"
                                                    className="sc-7yzmni-9 jnMVFjj sc-m8pibl-0 eBkKRJ"
                                                >
                                                    Terms of Service{" "}
                                                </a>
                                                and consent to its{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://uniswap.org/privacy-policy"
                                                    className="sc-7yzmni-9 jnMVFjj sc-m8pibl-0 eBkKRJ"
                                                >
                                                    Privacy Policy.
                                                </a>
                                                <span className="sc-m8pibl-1 hqtSjX">
                                                    {" "}
                                                    (Last Updated 6.7.23)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isSecondModalOpen && (
                                <div className={`sc-3dvm1v-2 dLsVJq ${isSecondModalOpen ? "open" : ""}`}>
                                    <div data-testid="close-account-drawer" className="sc-3dvm1v-5 hVzdzS"
                                        onClick={() => {
                                            setIsModalOpen(false);
                                            setSecondModalOpen(false)
                                        }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="sc-3dvm1v-4 jEKWjE"
                                        >
                                            <polyline points="13 17 18 12 13 7" />
                                            <polyline points="6 17 11 12 6 7" />
                                        </svg>
                                    </div>
                                    <div className="sc-3dvm1v-0 eTxptr" open="" />
                                    <div className="sc-3dvm1v-3 hyeENl" open="">
                                        <div id="wallet-dropdown-scroll-wrapper" className="sc-3dvm1v-1 fijsNj">
                                            <div className="sc-1kykgp9-0 sc-11yue4p-0 iCxowP kfarYJ">
                                                <div className="sc-1xe6nb0-0 cnmVKz">
                                                    <div className="sc-1xe6nb0-3 fjOrSN">
                                                        <i className="back-arrow ri-arrow-left-line"
                                                            onClick={() => setSecondModalOpen(false)}>
                                                        </i>
                                                        <span className="sc-1xe6nb0-1 UbGpC">
                                                            <div className="sc-sx9n2y-0 kivXvb css-rjqmed">Settings</div>
                                                        </span>
                                                    </div>
                                                    <div className="sc-sx9n2y-0 kivXvb sc-k6pz4u-1 bepFek css-rjqmed">
                                                        Preferences
                                                    </div>
                                                    <div className="sc-k6pz4u-2 bqhmxH">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                            <div width="40%" className="sc-bczRLJ sc-nrd8cx-0 gxbXPT feIyWM">
                                                                <div className="sc-sx9n2y-0 kandXm css-1aekuku">Theme</div>
                                                            </div>
                                                            <div width="60%" className="sc-bczRLJ sc-nrd8cx-0 foniQS jGtsjx">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-1euncec-1 hJYFVB xyz1 etXiLa">
                                                                    <div
                                                                        data-testid="theme-auto"
                                                                        onClick={() => {
                                                                            switchTheme(allowLightTheme ? 'light' : 'dark');
                                                                            setAllowLightTheme(!allowLightTheme);
                                                                            setActiveTheme(allowLightTheme ? 'light' : 'dark');
                                                                        }}
                                                                        className={`sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 sc-1euncec-0 hJYFVB xyz1 kHFzEX`}
                                                                    >
                                                                        <div className="sc-sx9n2y-0 kandXm css-rjqmed">Auto</div>
                                                                    </div>
                                                                    <div
                                                                        data-testid="theme-lightmode"
                                                                        className={`sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 sc-1euncec-0 hJYFVB xyz1 kHFzEX ${activeTheme === 'light' ? 'eqaHKd' : ''}`}
                                                                        onClick={handleSunClick}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={20}
                                                                            height={20}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        >
                                                                            <circle cx={12} cy={12} r={5} />
                                                                            <line x1={12} y1={1} x2={12} y2={3} />
                                                                            <line x1={12} y1={21} x2={12} y2={23} />
                                                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                                                            <line x1={1} y1={12} x2={3} y2={12} />
                                                                            <line x1={21} y1={12} x2={23} y2={12} />
                                                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                                                        </svg>
                                                                        <div className="sc-sx9n2y-0 kandXm css-rjqmed" />
                                                                    </div>
                                                                    <div
                                                                        data-testid="theme-darkmode"
                                                                        className={`sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 sc-1euncec-0 hJYFVB xyz1 kHFzEX ${activeTheme === 'dark' ? 'eqaHKd' : ''}`}
                                                                        onClick={handleMoonClick}
                                                                    > <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={20}
                                                                        height={20}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                                                        </svg>
                                                                        <div className="sc-sx9n2y-0 kandXm css-rjqmed" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                            <div className="sc-1kykgp9-0 sc-1opkkz6-0 iCxowP kMuqSe">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                                    <div className="sc-sx9n2y-0 kivXvb css-1aekuku">
                                                                        Hide small balances
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                role="option"
                                                                aria-selected="true"
                                                                className="sc-1poje5t-0 jANAGB"
                                                            >
                                                                <span className="sc-1poje5t-1 jsjUXs" />
                                                            </button>
                                                        </div>
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                            <div className="sc-1kykgp9-0 sc-1opkkz6-0 iCxowP kMuqSe">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                                    <div className="sc-sx9n2y-0 kivXvb css-1aekuku">
                                                                        Allow analytics
                                                                    </div>
                                                                </div>
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                                    <div className="sc-sx9n2y-0 bftkTM css-mx5ldy">
                                                                        We use anonymized data to enhance your experience with
                                                                        Uniswap Labs products.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                role="option"
                                                                aria-selected="true"
                                                                className="sc-1poje5t-0 jANAGB"
                                                            >
                                                                <span className="sc-1poje5t-1 jsjUXs" />
                                                            </button>
                                                        </div>
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                            <div className="sc-1kykgp9-0 sc-1opkkz6-0 iCxowP kMuqSe">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB xyz1">
                                                                    <div className="sc-sx9n2y-0 kivXvb css-1aekuku">
                                                                        Show testnets
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                id="testnets-toggle"
                                                                data-testid="testnets-toggle"
                                                                role="option"
                                                                aria-selected="false"
                                                                className="sc-1poje5t-0 ffxhvk"
                                                            >
                                                                <span className="sc-1poje5t-1 bQBOQe" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-testid="wallet-header"
                                                        className="sc-sx9n2y-0 kivXvb sc-k6pz4u-1 bepFek css-rjqmed"
                                                    >
                                                        Language
                                                    </div>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=en-US">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            English
                                                        </div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="#4C82FB"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            opacity={1}
                                                        >
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=af-ZA">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Afrikaans
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ar-SA">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            العربية
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ca-ES">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Català
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=cs-CZ">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            čeština
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=da-DK">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            dansk
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=de-DE">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Deutsch
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=el-GR">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            ελληνικά
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=es-ES">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Español
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=fi-FI">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            suomi
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=fr-FR">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            français
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=he-IL">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            עִברִית
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=hu-HU">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Magyar
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=id-ID">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            bahasa Indonesia
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=it-IT">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Italiano
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ja-JP">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            日本語
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ko-KR">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            한국어
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=nl-NL">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Nederlands
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=no-NO">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            norsk
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=pl-PL">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Polskie
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=pt-BR">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            português
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=pt-PT">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            português
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ro-RO">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Română
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=ru-RU">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            русский
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=sr-SP">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Српски
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=sv-SE">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            svenska
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=sw-TZ">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Kiswahili
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=tr-TR">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Türkçe
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=uk-UA">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Український
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=vi-VN">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            Tiếng Việt
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=zh-CN">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            简体中文
                                                        </div>
                                                    </a>
                                                    <a className="sc-k6pz4u-0 iFDhEy" href="#/nfts?lng=zh-TW">
                                                        <div
                                                            data-testid="wallet-language-item"
                                                            className="sc-sx9n2y-0 kivXvb css-zhpkf8"
                                                        >
                                                            繁体中文
                                                        </div>
                                                    </a>
                                                    <div className="sc-1lgoclx-0 zoyEF">
                                                        <div className="sc-d5tbhs-1 cSretk">
                                                            <div className="sc-sx9n2y-0 bqwbXT css-zhpkf8">
                                                                Version: 7edf32
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Settings Modal */}


                            {/* Settings Modal End */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Modal;