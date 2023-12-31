import React, { useEffect, useState } from 'react';
import './LiquidityModal.css';
import SwapModal from '../SwapModal/SwapModal';
import { NavLink } from 'react-router-dom';
import BarChart from './BarChart/BarChart';
import SettingModal from '../../utils/SettingModal/SettingModal';

const feeOptions = [
    { value: 0.01, percent: 0, description: 'Best for very stable pairs' },
    { value: 0.05, percent: 25, description: 'Best for stable pairs' },
    { value: 0.3, percent: 74, description: 'Best for most pairs' },
    { value: 1, percent: 2, description: 'Best for exotic pairs' },
];

const LiquidityModal = (
    {
        swapTokens,
        handleSwapModal,
        swapModal,
        setSwapModal,
        handleSelect,
        currentCurrencyId,
        setCurrentCurrencyId,
        liquidityTokenOne,
        liquidityTokenTwo,
        isSettingModal,
        handleSettingModal,
    }
) => {
    const isLiquiditySelected = liquidityTokenTwo.symbol !== 'Select Token';

    const [hideButton, setHideButton] = useState(false);
    const [feeValue, setFeeValue] = useState(0.3);
    const [minInputValue, setMinInputValue] = useState(0);
    const [maxInputValue, setMaxInputValue] = useState(0);

    const handleButtonClick = (newFeeValue) => {
        setFeeValue(newFeeValue);
    };

    const handleButtonHide = () => {
        setHideButton((prev) => !prev)
    }

    //Token
    const renderLiquidityButtonContent = (currencyId) => {
        let currentToken = (currencyId === "liquidityEthId") ? liquidityTokenOne : liquidityTokenTwo;
        if (currencyId === "liquidityEthId" || (currencyId !== "liquidityEthId" && currentToken?.symbol !== 'Select Token')) {
            return (
                <button
                    id={`open-currency-select-${currencyId}`}
                    className={`sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP hcUXCv ${currencyId === "liquidityEthId" ? 'open-currency-selected-top' : 'open-currency-selected-bottom'}`}
                    onClick={() => handleSwapModal(currencyId)}

                >

                    <span className="CurrencyInputPanel__Aligner-sc-73f91aaf-6 kkiXeD">
                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                            <div
                                className="AssetLogo__LogoContainer-sc-1d2e0d12-3 hOvXWG"
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: "0.5rem"
                                }}
                            >
                                <div className="AssetLogo__LogoImageWrapper-sc-1d2e0d12-2 iZhrtN">
                                    <img
                                        src={currentToken?.imgSrc}
                                        alt="ETH logo"
                                        className="AssetLogo__LogoImage-sc-1d2e0d12-1 IJysW"
                                    />
                                </div>
                            </div>
                            <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container colorrr">
                                {currentToken?.symbol}
                            </span>
                        </div>
                        <div className='dropdown-icon'>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>
                    </span>

                </button>
            );
        } else {

            return (
                <button id={`open-currency-select-${currencyId}`}
                    className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP iGQvak open-currency-selected-bottom"
                    onClick={() => {
                        handleSwapModal(currencyId);
                        // handleTokenSelection(currencyId);
                    }}
                >
                    <span className="CurrencyInputPanel__Aligner-sc-73f91aaf-6 kkiXeD">
                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                            <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container">
                                Select a token
                            </span>
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
        <div>
            <div className="App__BodyWrapper-sc-7e45ae4f-0 clIMsa">
                <div
                    data-testid="popups"
                    className="Column__AutoColumn-sc-72c388fb-2 Popups__FixedPopupColumn-sc-9b9ed4ff-2 erfIcs cJuMSY"
                />
                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                    <div className="Polling__StyledPolling-sc-8f973fd5-0 iHReYX">
                        <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU Polling__StyledPollingBlockNumber-sc-8f973fd5-1 pYsaH css-x9zcw6">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://etherscan.io/block/17971546"
                                className="components__StyledLink-sc-81cd496b-9 rCUQQ"
                            >
                                <div className="Popover__ReferenceElement-sc-f19d15a-1 bndAvc">
                                    <div>17971546 </div>
                                </div>
                            </a>
                        </div>
                        <div className="Polling__StyledPollingDot-sc-8f973fd5-2 hCatfB" />{" "}
                    </div>
                </div>
                <div className="styled__PopupContainer-sc-d835dd89-0 gKJuLw">
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
                        data-testid="uniswap-wallet-banner"
                        className="styled__StyledXButton-sc-d835dd89-3 doyKmv"
                    >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    <img
                        src="/static/media/base_background_icon.1690f22892c4fc70751f1475802b2bdb.svg"
                        alt="transparent base background logo"
                        className="styled__BaseBackgroundImage-sc-d835dd89-1 smOka"
                    />
                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-17l0moo">
                        Swap on{" "}
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.5689 10C19.5689 15.4038 15.1806 19.7845 9.76737 19.7845C4.63163 19.7845 0.418433 15.8414 0 10.8225H12.9554V9.17755H0C0.418433 4.15863 4.63163 0.215576 9.76737 0.215576C15.1806 0.215576 19.5689 4.59621 19.5689 10Z"
                                fill="white"
                            />
                        </svg>{" "}
                        BASE in the Uniswap wallet
                    </div>
                    <div className="sc-bczRLJ Row-sc-34df4f97-0 styled__ButtonRow-sc-d835dd89-2 hJYFVB gOYHMo bXKUaT">
                        <button
                            width="125px"
                            className="sc-bczRLJ jnEFg Button__BaseButton-sc-4f96dcd8-1 styled__BannerButton-sc-d835dd89-4 kIHSLT bEqvED"
                        >
                            <div className="text__TextWrapper-sc-9327e48a-0 jZqRhH css-18hn7mq">
                                Learn more
                            </div>
                        </button>
                    </div>
                </div>
                <div className="styled__ScrollablePage-sc-a3e32a7b-1 kVNjZg">
                    <main className={`AppBody_BodyWrapper-sc-19e20e47-0 AddLiquidity_StyledBodyWrapper-sc-91848848-0 GfTH ${hideButton ? "FuZnx-expanded" : "FuZnx"}`}>
                        <div className="NavigationTabs__Tabs-sc-b4540a6e-0 kmmojd">
                            <div
                                className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr"
                                style={{ padding: "1rem 1rem 0px" }}
                            >
                                <NavLink
                                    flex={1}
                                    className="NavigationTabs__StyledLink-sc-b4540a6e-1 dIAqzj"
                                    to="/pools"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#98A1C0"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="NavigationTabs__StyledArrowLeft-sc-b4540a6e-3 jpkEeW"
                                    >
                                        <line x1={19} y1={12} x2={5} y2={12} />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                </NavLink>
                                <div className="text__TextWrapper-sc-9327e48a-0 blhgKn NavigationTabs__AddRemoveTitleText-sc-b4540a6e-4 cMHLWt css-12uvan3">
                                    Add Liquidity
                                </div>
                                <div className="css-vurnku" style={{ marginRight: "0.5rem" }}>
                                    <div
                                        className="sc-bczRLJ Row-sc-34df4f97-0 fgCeff gOYHMo"
                                        style={{ width: "fit-content", minWidth: "fit-content" }}
                                    >
                                        <div className="styled__MediumOnly-sc-a3e32a7b-6 cYrhOe">
                                            <button className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonText-sc-4f96dcd8-9 hWKjgZ jtnClT">
                                                <div className="text__TextWrapper-sc-9327e48a-0 cWDToC css-15li2d9">
                                                    {/* Clear All */}
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="Settings__Menu-sc-6676197f-0 imhdhD">
                                    <button
                                        id="open-settings-dialog-button"
                                        data-testid="open-settings-dialog-button"
                                        aria-label="Transaction Settings"
                                        className="MenuButton__Button-sc-773d3ba1-1 kHIRPQ"
                                        onClick={handleSettingModal}
                                    >
                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 MenuButton__IconContainer-sc-773d3ba1-2 hJYFVB gOYHMo hrkQLI">
                                            <i style={{ fontSize: "22px" }} className="ri-settings-3-fill"></i>
                                        </div>

                                    </button>
                                    {isSettingModal && (
                                        <SettingModal />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="styled__Wrapper-sc-a3e32a7b-0 vSeCC">
                            <div className="styled__ResponsiveTwoColumns-sc-a3e32a7b-5 dXokMm">
                                <div className="Column__AutoColumn-sc-72c388fb-2 ereGUg">
                                    <div className="Column__AutoColumn-sc-72c388fb-2 erfjwt">
                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 eYHTYx gOYHMo BkVYr">
                                            <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1lohbqv">
                                                Select Pair
                                            </div>
                                        </div>
                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                            <div
                                                id="add-liquidity-input-tokena "
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 bhoFAK styled__CurrencyDropdown-sc-a3e32a7b-3 gkamEi"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 epZvyg">
                                                    <div id="liquidityEthId"
                                                        className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 jGjrwu"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        {/* ETH BUTTON */}
                                                        {renderLiquidityButtonContent("liquidityEthId")}

                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: 12 }} />
                                            <div
                                                id="add-liquidity-input-tokenb "
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 bhoFAK styled__CurrencyDropdown-sc-a3e32a7b-3 gkamEi"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 epZvyg">
                                                    <div id="liquidityTokenId"
                                                        className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 jGjrwu"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        {/* Select A token BUTTON */}
                                                        {renderLiquidityButtonContent("liquidityTokenId")}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Column__AutoColumn-sc-72c388fb-2 ereioh">
                                            <div

                                                disabled=""
                                                className={`Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt isLiqudity ${isLiquiditySelected ? 'token-selected' : ''}`}
                                            >
                                                <div className="sc-bczRLJ Card-sc-8b665604-0 FeeSelector__FocusedOutlineCard-sc-2b537477-0 hJYFVB jlQAxw jgrgoQ">
                                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                        <div
                                                            id="add-liquidity-selected-fee"
                                                            className="Column__AutoColumn-sc-72c388fb-2 gXqkQO"
                                                        >
                                                            <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1lohbqv">
                                                                {feeValue}% fee tier

                                                            </div>
                                                            <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                The % you will earn in fees.
                                                            </div>
                                                        </div>
                                                        <button
                                                            width="auto"
                                                            className="sc-bczRLJ cBKomN Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 ixVlAp jAJJVP"
                                                            onClick={handleButtonHide}>
                                                            {hideButton ? "Hide" : 'Edit'}
                                                        </button>
                                                    </div>
                                                </div>
                                                {hideButton && (
                                                    <div className="FeeSelector__Select-sc-2b537477-1 dpNkPS">
                                                        {feeOptions.map((feeItem, index) => (
                                                            <button className={`sc-bczRLJ  Button__BaseButton-sc-4f96dcd8-1 Button__ButtonOutlined-sc-4f96dcd8-7 eOoGds aQTri
                                                              lbXqUa  ${feeValue === feeItem.value ? 'selected' : ""}`}
                                                                key={index} onClick={() => handleButtonClick(feeItem.value)}>
                                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                                    <div className="Column__AutoColumn-sc-72c388fb-2 ezHOjM">
                                                                        <div className="Column__AutoColumn-sc-72c388fb-2 gajsee">
                                                                            <div className="text__TextWrapper-sc-9327e48a-0 blhgKn FeeOption__ResponsiveText-sc-6b7ccec1-0 fYKQxG css-1lohbqv">
                                                                                {feeItem.value}%
                                                                            </div>

                                                                            <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                                {feeItem.description}
                                                                            </div>
                                                                            <div className="Badge-sc-8f0f9d15-0 gYarwg">
                                                                                <div className="text__TextWrapper-sc-58dbf47a-0 lkkRDH css-fppy5i">
                                                                                    {feeItem.percent}% select
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                                <div
                                    disabled=""
                                    className={`Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt isLiqudity ${isLiquiditySelected ? 'token-selected' : ''} `}
                                >
                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                        <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1lohbqv">
                                            Set Price Range
                                        </div>
                                    </div>
                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__AutoRow-sc-34df4f97-3 hJYFVB bObhWT bEIXES">
                                        <div className="sc-bczRLJ Card-sc-8b665604-0 Card__OutlineCard-sc-8b665604-5 InputStepCounter__FocusedOutlineCard-sc-98d37844-2 hJYFVB jlQAxw hapmMj hXXOVF">
                                            <div className="InputStepCounter__InputRow-sc-98d37844-0 ddcmlg">
                                                <div className="Column__AutoColumn-sc-72c388fb-2 InputStepCounter__InputColumn-sc-98d37844-4 iHjCXw cVcAns">
                                                    <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU InputStepCounter__InputTitle-sc-98d37844-5 eRovVv css-9bv76i">
                                                        Low price
                                                    </div>
                                                    <input
                                                        className="NumericalInput__StyledInput-sc-e2342ddc-0 gZlbTK InputStepCounter__StyledInput-sc-98d37844-3 jgKZAt rate-input-0"
                                                        fontSize="20px"
                                                        inputMode="decimal"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder={0}
                                                        minLength={1}
                                                        maxLength={79}
                                                        spellCheck="false"
                                                        value={minInputValue}
                                                    />
                                                    <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU InputStepCounter__InputTitle-sc-98d37844-5 eRovVv css-2qpl5c">
                                                        per ETH
                                                    </div>
                                                </div>
                                                <div className="Column__AutoColumn-sc-72c388fb-2 dCQVZu">
                                                    <button
                                                        data-testid="increment-price-range"
                                                        disabled=""
                                                        className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 InputStepCounter__SmallButton-sc-98d37844-1 hWKjgZ bdLEKg eKOJak"
                                                    >
                                                        <div
                                                            disabled=""
                                                            className="text__TextWrapper-sc-9327e48a-0 blhgKn InputStepCounter__ButtonLabel-sc-98d37844-6 ojMTq css-15li2d9"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <line x1={12} y1={5} x2={12} y2={19} />
                                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button
                                                        data-testid="decrement-price-range"
                                                        disabled=""
                                                        className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 InputStepCounter__SmallButton-sc-98d37844-1 hWKjgZ bdLEKg eKOJak"
                                                    >
                                                        <div
                                                            disabled=""
                                                            className="text__TextWrapper-sc-9327e48a-0 blhgKn InputStepCounter__ButtonLabel-sc-98d37844-6 ojMTq css-15li2d9"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-bczRLJ Card-sc-8b665604-0 Card__OutlineCard-sc-8b665604-5 InputStepCounter__FocusedOutlineCard-sc-98d37844-2 hJYFVB jlQAxw hapmMj hXXOVF">
                                            <div className="InputStepCounter__InputRow-sc-98d37844-0 ddcmlg">
                                                <div className="Column__AutoColumn-sc-72c388fb-2 InputStepCounter__InputColumn-sc-98d37844-4 iHjCXw cVcAns">
                                                    <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU InputStepCounter__InputTitle-sc-98d37844-5 eRovVv css-9bv76i">
                                                        High price
                                                    </div>
                                                    <input
                                                        className="NumericalInput__StyledInput-sc-e2342ddc-0 gZlbTK InputStepCounter__StyledInput-sc-98d37844-3 jgKZAt rate-input-0"
                                                        fontSize="20px"
                                                        inputMode="decimal"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder={0}
                                                        minLength={1}
                                                        maxLength={79}
                                                        spellCheck="false"
                                                        value={maxInputValue}

                                                    />
                                                    <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU InputStepCounter__InputTitle-sc-98d37844-5 eRovVv css-2qpl5c">
                                                        per ETH
                                                    </div>
                                                </div>
                                                <div className="Column__AutoColumn-sc-72c388fb-2 dCQVZu">
                                                    <button
                                                        data-testid="increment-price-range"
                                                        disabled=""
                                                        className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 InputStepCounter__SmallButton-sc-98d37844-1 hWKjgZ bdLEKg eKOJak"
                                                    >
                                                        <div
                                                            disabled=""
                                                            className="text__TextWrapper-sc-9327e48a-0 blhgKn InputStepCounter__ButtonLabel-sc-98d37844-6 ojMTq css-15li2d9"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <line x1={12} y1={5} x2={12} y2={19} />
                                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button
                                                        data-testid="decrement-price-range"
                                                        disabled=""
                                                        className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 InputStepCounter__SmallButton-sc-98d37844-1 hWKjgZ bdLEKg eKOJak"
                                                    >
                                                        <div
                                                            disabled=""
                                                            className="text__TextWrapper-sc-9327e48a-0 blhgKn InputStepCounter__ButtonLabel-sc-98d37844-6 ojMTq css-15li2d9"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={18}
                                                                height={18}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    disabled=""
                                    className={`Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt isLiqudity ${isLiquiditySelected ? 'token-selected' : ''}`}
                                >
                                    {/* CHART */}
                                    <div
                                        className="Column__AutoColumn-sc-72c388fb-2 erfjwt"
                                        style={{ minHeight: 200 }}
                                    >
                                        <BarChart />
                                        <div className="LiquidityChartRangeInput__ChartWrapper-sc-4b8a30c6-0 AKZXT">
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div
                                        disabled=""
                                        className={`Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 gXqkQO isLiqudity ${isLiquiditySelected ? 'token-selected' : ''}`}
                                    >
                                        <div className="Column__AutoColumn-sc-72c388fb-2 erfjwt">
                                            <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1lohbqv">
                                                Deposit Amounts
                                            </div>
                                            <div
                                                id="add-liquidity-input-tokena"
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 fdQVur"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 cOqmuC">
                                                    <div className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 hyQXvD">
                                                        <input
                                                            className="NumericalInput__StyledInput-sc-e2342ddc-0 hmakIi CurrencyInputPanel__StyledNumericalInput-sc-73f91aaf-10 byCAPU token-amount-input"
                                                            inputMode="decimal"
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            type="text"
                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                            placeholder={0}
                                                            minLength={1}
                                                            maxLength={79}
                                                            spellCheck="false"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP cCMOgz open-currency-select-button"
                                                            pointerEvents="none"
                                                        >
                                                            <span className="CurrencyInputPanel__Aligner-sc-73f91aaf-6 kkiXeD">
                                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                                                                    <div
                                                                        className="AssetLogo__LogoContainer-sc-1d2e0d12-3 hOvXWG"
                                                                        style={{
                                                                            height: 24,
                                                                            width: 24,
                                                                            marginRight: "0.5rem"
                                                                        }}
                                                                    >
                                                                        <div className="AssetLogo__LogoImageWrapper-sc-1d2e0d12-2 iZhrtN">
                                                                            <img
                                                                                src='/assets/images/tokens/eth-icon.png'
                                                                                alt="ETH logo"
                                                                                className="AssetLogo__LogoImage-sc-1d2e0d12-1 IJysW"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container">
                                                                        ETH
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="CurrencyInputPanel__LabelRow-sc-73f91aaf-4 CurrencyInputPanel__FiatRow-sc-73f91aaf-5 gRWQqi kjAAwT">
                                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                            <div className="styled__LoadingOpacityContainer-sc-f9cbe2c6-1 bmCdZH">
                                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 hJYFVB cPkaXY">
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-zhpkf8">
                                                                        <div className="Popover__ReferenceElement-sc-f19d15a-1 bndAvc">
                                                                            <div>-</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="add-liquidity-input-tokenb"
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 fdQVur"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 cOqmuC">
                                                    <div className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 hyQXvD">
                                                        <input
                                                            className="NumericalInput__StyledInput-sc-e2342ddc-0 hmakIi CurrencyInputPanel__StyledNumericalInput-sc-73f91aaf-10 byCAPU token-amount-input"
                                                            inputMode="decimal"
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            type="text"
                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                            placeholder={0}
                                                            minLength={1}
                                                            maxLength={79}
                                                            spellCheck="false"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP gHpyEg open-currency-select-button"
                                                            pointerEvents="none"
                                                        >
                                                            <span className="CurrencyInputPanel__Aligner-sc-73f91aaf-6 kkiXeD">
                                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                                                                    <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container">
                                                                        Select a token
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="sc-bczRLJ gIjoKy Button__BaseButton-sc-4f96dcd8-1 Button__BaseButtonLight-sc-4f96dcd8-4 dkaNOU fCkFnu">
                                    <div className="Button__ButtonOverlay-sc-4f96dcd8-0 fNUVbK" />
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                    </main>
                </div>

                <SwapModal
                    swapTokens={swapTokens}
                    // selectedToken={selectedToken}
                    selectedToken={currentCurrencyId === "liquidityEthId" ? liquidityTokenOne : liquidityTokenTwo}
                    swapModal={swapModal}
                    setSwapModal={setSwapModal}
                    isLiquidity={true}
                    handleSelect={handleSelect}
                    currentCurrencyId={currentCurrencyId}
                    setCurrentCurrencyId={setCurrentCurrencyId}
                    liquidityTokenOne={liquidityTokenOne}
                    liquidityTokenTwo={liquidityTokenTwo}

                />
            </div>



        </div >

    )
}

export default LiquidityModal





