import React, { useState } from 'react';
import './Swap.css';
import SwapModal from '../../utils/SwapModal/SwapModal';

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
        handleSelect
    }) => {

    const [etheriumId, setEtheriumId] = useState("ethId");
    const [tokenId, setTokenId] = useState("tokenId");

    const switchHandler = () => {
        const temp = etheriumId;
        setEtheriumId(tokenId);
        setTokenId(temp);
    };

    const renderButtonContent = (currencyId) => {
        let currentToken = (currencyId === "ethId") ? selectedToken : selectedTokenSecond;
        if (currencyId === "ethId" || (currencyId !== "ethId" && currentToken?.symbol !== 'Select Token')) {

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
                <button id={`open-currency-select-${currencyId}`} className='open-currency-btn-bottom' onClick={() => handleSwapModal(currencyId)}>
                    <span className='span-two'>
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
                                <span className='swap-btn'>Swap</span>
                                <div className='buy'>
                                    <button id='btn-id' className='buy-btn'>Buy</button>
                                </div>
                            </div>

                            <div className='gear'>
                                <button className='gear-btn'>
                                    <div>
                                        <i class="ri-settings-3-fill gear-icon"></i>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* You Pay Tab */}
                        <div>
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
                                        {inputValues.youPay && (
                                            <div className='youPay-label-2'>
                                                ${(inputValues.youPay * selectedToken.price).toFixed(2)}
                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>

                            <div className='switch-button' onClick={switchHandler}>
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
                                                    minlength="1"
                                                    maxlength="79"
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
                                    <button font-weight="600" id="connectId" class="connect-wallet" onClick={() => setIsModalOpen(true)}>
                                        <div className=""></div>
                                        Connect Wallet
                                    </button>
                                </div>
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