import React, { useEffect, useRef, useState } from 'react';
import './Swap.css';
import SwapModal from '../../utils/SwapModal/SwapModal';
import SettingModal from '../../utils/SettingModal/SettingModal';

const Swap = (
    {
        swapTokens,
        setIsModalOpen,
        swapModal,
        setSwapModal,
        currentCurrencyId,
        handleSwapModal,
        selectedToken,
        setSelectedToken,
        selectedTokenSecond,
        setSelectedTokenSecond,
        inputValues,
        handleInputChange,
        calculateYouReceiveAmount,
        handleSelect,
        isSettingModal,
        setIsSettingModal,
        handleSettingModal,
        switchTokens
    }) => {

    const etheriumId = "ethId";
    const tokenId = "tokenId";

    // "swap" | "buy" tab on the card header
    const [activeTab, setActiveTab] = useState("swap");

    // Fiat amount for the Buy tab
    const [buyAmount, setBuyAmount] = useState("");
    const presetAmounts = [100, 300, 1000];

    const handleBuyAmountChange = (event) => {
        const { value } = event.target;
        if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
            setBuyAmount(value);
        }
    };

    const buyTokenAmount = () => {
        const amount = parseFloat(String(buyAmount).replace(",", "."));
        if (!buyAmount || isNaN(amount) || !selectedToken?.price) return "0";
        const tokens = amount / selectedToken.price;
        return parseFloat(tokens.toFixed(tokens < 1 ? 6 : 2)).toString();
    };

    // Close the settings flyout when clicking anywhere outside of it
    const gearRef = useRef(null);
    useEffect(() => {
        if (!isSettingModal) return;

        const handleClickOutside = (event) => {
            if (gearRef.current && !gearRef.current.contains(event.target)) {
                setIsSettingModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSettingModal, setIsSettingModal]);

    const renderButtonContent = (currencyId) => {
        let currentToken = (currencyId === "ethId") ? selectedToken : selectedTokenSecond;
        // The placeholder token carries no image, so show the plain label instead
        const hasToken = currentToken?.symbol && currentToken.symbol !== 'Select Token';
        if (hasToken) {

            return (
                <button
                    id={`open-currency-select-${currencyId}`}
                    className={currencyId === "ethId" ? 'open-currency-btn-top' : 'open-currency-btn-bottom'}
                    onClick={() => handleSwapModal(currencyId)}
                >
                    <span className={currencyId === "ethId" ? 'span-one' : 'span-two'}>
                        <div className='cryptocurrency-wrapper'>
                            <div className="image-wrapper">
                                <div>
                                    <img className='icon-image' src={currentToken?.imgSrc} alt={currentToken?.symbol} />
                                </div>
                            </div>
                            <span className="token-name">{currentToken?.symbol}</span>
                        </div>
                        <div className='dropdown-icon'>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>

                    </span>
                </button>
            );
        } else {
            return (
                <button
                    id={`open-currency-select-${currencyId}`}
                    className={currencyId === "ethId" ? 'open-currency-btn-top' : 'open-currency-btn-bottom'}
                    onClick={() => handleSwapModal(currencyId)}
                >
                    <span className={currencyId === "ethId" ? 'span-one' : 'span-two'}>
                        <div className='cryptocurrency-wrapper'>
                            <div className="text-wrapper">
                                <span className="select-token">Select token</span>
                            </div>
                        </div>
                        <div className='dropdown-icon'>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                    </span>
                </button>
            )
        }
    };

    return (

        <React.Fragment>
            <div className='swap-wrapper'>
                <div className='card-section'>
                    <main className='card-bg'>
                        <div id="card-top" className='card-top-parent'>
                            <div id="btns-top" className='top-btns'>
                                <button
                                    className={`swap-btn tab-btn ${activeTab === 'swap' ? 'tab-active' : ''}`}
                                    onClick={() => setActiveTab('swap')}
                                >
                                    Swap
                                </button>
                                <div className='buy'>
                                    <button
                                        id='btn-id'
                                        className={`buy-btn tab-btn ${activeTab === 'buy' ? 'tab-active' : ''}`}
                                        onClick={() => setActiveTab('buy')}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>

                            <div className='gear' ref={gearRef}>
                                <button className='gear-btn' onClick={handleSettingModal}>
                                    <div>
                                        <i className="ri-settings-3-fill gear-icon" ></i>
                                    </div>
                                </button>
                                {isSettingModal && (
                                    <SettingModal />
                                )}
                            </div>
                        </div>

                        {/* You Pay Tab */}
                        <div style={{ display: activeTab === 'swap' ? 'block' : 'none' }}>
                            <div className='you-pay'>
                                <div id='swap-currency-input' className='swap-currency'>
                                    <div className='input-wrapper'>
                                        <div className='youPay-label'>You pay</div>
                                        <div className='paying-wrapper'>

                                            <input id="token-amount" class="token-amount-input"
                                                inputMode="numeric"
                                                autocomplete="off"
                                                autocorrect="off"
                                                type="text"
                                                name="youPay"
                                                placeholder="0"
                                                minlength="1"
                                                maxlength="79"
                                                spellcheck="false"
                                                value={inputValues.youPay}
                                                onChange={handleInputChange} />

                                            <div id={etheriumId}>
                                                {renderButtonContent(etheriumId)}
                                            </div>

                                        </div>
                                        {inputValues.youPay && selectedToken?.price && (
                                            <div className='youPay-label-2'>
                                                ${(parseFloat(String(inputValues.youPay).replace(",", ".")) * selectedToken.price).toFixed(2)}
                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>

                            <div className='switch-button' onClick={switchTokens}>
                                <div className='switch-bg'>
                                    <i className="arrow-down ri-arrow-down-line" ></i>
                                </div>
                            </div>

                            <div className='grid'>
                                <div className='you-receive'>
                                    <div id='swap-currency-input' className='swap-currency'>
                                        <div className='input-wrapper'>
                                            <label className='youReceive-label'>You receive</label>
                                            <div className='paying-wrapper'>
                                                <input id="token-amount" class="token-amount-input"
                                                    inputMode="numeric"
                                                    autocomplete="off"
                                                    autocorrect="off"
                                                    name="youReceive"
                                                    type="text"
                                                    placeholder="0"
                                                    spellcheck="false"
                                                    value={calculateYouReceiveAmount()}
                                                    onChange={handleInputChange} />

                                                <div id={tokenId}>
                                                    {renderButtonContent(tokenId)}
                                                </div>

                                            </div>

                                            <div className='youReceive-label2'>
                                                {/* {calculateYouReceiveAmount()} */}
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <button font-weight="600" id="connectId" className="connect-wallet" onClick={() => setIsModalOpen(true)}>
                                        <div className=""></div>
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Buy Tab */}
                        <div style={{ display: activeTab === 'buy' ? 'block' : 'none' }}>
                            <div className='you-pay buy-panel'>
                                <div className='swap-currency'>
                                    <div className='input-wrapper'>
                                        <div className='buy-amount-row'>
                                            <span className='buy-currency-symbol'>$</span>
                                            <input
                                                className='token-amount-input buy-amount-input'
                                                inputMode="numeric"
                                                autoComplete="off"
                                                type="text"
                                                name="buyAmount"
                                                placeholder="0"
                                                spellCheck="false"
                                                value={buyAmount}
                                                onChange={handleBuyAmountChange}
                                            />
                                        </div>

                                        <div className='buy-token-row'>
                                            <span className='buy-token-estimate'>
                                                {buyTokenAmount()} {selectedToken?.symbol}
                                            </span>
                                            {renderButtonContent(etheriumId)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='buy-presets'>
                                {presetAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className={`buy-preset-btn ${String(amount) === buyAmount ? 'buy-preset-active' : ''}`}
                                        onClick={() => setBuyAmount(String(amount))}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>

                            <div>
                                <button className="connect-wallet" onClick={() => setIsModalOpen(true)}>
                                    Connect Wallet
                                </button>
                            </div>
                        </div>


                    </main>
                </div>

            </div>

            <SwapModal
                swapModal={swapModal}
                setSwapModal={setSwapModal}
                swapTokens={swapTokens}
                selectedToken={selectedToken}
                selectedTokenSecond={selectedTokenSecond}
                currentCurrencyId={currentCurrencyId}
                setSelectedToken={setSelectedToken}
                setSelectedTokenSecond={setSelectedTokenSecond}
                handleSelect={handleSelect}
                isLiquidity={false}
            />


        </React.Fragment>
    );
}

export default Swap;