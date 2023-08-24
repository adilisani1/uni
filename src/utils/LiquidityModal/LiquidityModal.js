import React from 'react';
import './LiquidityModal.css';

const LiquidityModal = () => {
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
                    <main className="AppBody__BodyWrapper-sc-19e20e47-0 AddLiquidity__StyledBodyWrapper-sc-91848848-0 GfTH FuZnx">
                        <div className="NavigationTabs__Tabs-sc-b4540a6e-0 kmmojd">
                            <div
                                className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr"
                                style={{ padding: "1rem 1rem 0px" }}
                            >
                                <a
                                    flex={1}
                                    className="NavigationTabs__StyledLink-sc-b4540a6e-1 dIAqzj"
                                    href="/pools"
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
                                </a>
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
                                                    Clear All
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
                                    >
                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 MenuButton__IconContainer-sc-773d3ba1-2 hJYFVB gOYHMo hrkQLI">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MenuButton__Icon-sc-773d3ba1-0 hPGtHV"
                                            >
                                                <path
                                                    d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </button>
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
                                                id="add-liquidity-input-tokena"
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 bhoFAK styled__CurrencyDropdown-sc-a3e32a7b-3 gkamEi"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 epZvyg">
                                                    <div
                                                        className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 jGjrwu"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        <button className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP hcUXCv open-currency-select-button">
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
                                                                                src="data:image/png;base64,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"
                                                                                alt="ETH logo"
                                                                                className="AssetLogo__LogoImage-sc-1d2e0d12-1 IJysW"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container colorrr">
                                                                        ETH
                                                                    </span>
                                                                </div>
                                                                <svg
                                                                    width={12}
                                                                    height={7}
                                                                    viewBox="0 0 12 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="CurrencyInputPanel__StyledDropDown-sc-73f91aaf-7 cDVJfz"
                                                                >
                                                                    <path
                                                                        d="M0.97168 1L6.20532 6L11.439 1"
                                                                        stroke="#AEAEAE"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: 12 }} />
                                            <div
                                                id="add-liquidity-input-tokenb"
                                                className="CurrencyInputPanel__InputPanel-sc-73f91aaf-0 bhoFAK styled__CurrencyDropdown-sc-a3e32a7b-3 gkamEi"
                                            >
                                                <div className="CurrencyInputPanel__Container-sc-73f91aaf-1 epZvyg">
                                                    <div
                                                        className="CurrencyInputPanel__InputRow-sc-73f91aaf-3 jGjrwu"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        <button className="sc-bczRLJ lfsInV Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 CurrencyInputPanel__CurrencySelect-sc-73f91aaf-2 hWKjgZ jAJJVP iGQvak open-currency-select-button">
                                                            <span className="CurrencyInputPanel__Aligner-sc-73f91aaf-6 kkiXeD">
                                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB gOYHMo jeYuAz">
                                                                    <span className="CurrencyInputPanel__StyledTokenName-sc-73f91aaf-8 reOdD token-symbol-container">
                                                                        Select a token
                                                                    </span>
                                                                </div>
                                                                <svg
                                                                    width={12}
                                                                    height={7}
                                                                    viewBox="0 0 12 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="CurrencyInputPanel__StyledDropDown-sc-73f91aaf-7 cDVJfz"
                                                                >
                                                                    <path
                                                                        d="M0.97168 1L6.20532 6L11.439 1"
                                                                        stroke="#AEAEAE"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Column__AutoColumn-sc-72c388fb-2 ereioh">
                                            <div
                                                disabled=""
                                                className="Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt dRMJzS"
                                            >
                                                <div className="sc-bczRLJ Card-sc-8b665604-0 FeeSelector__FocusedOutlineCard-sc-2b537477-0 hJYFVB jlQAxw jgrgoQ">
                                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                        <div
                                                            id="add-liquidity-selected-fee"
                                                            className="Column__AutoColumn-sc-72c388fb-2 gXqkQO"
                                                        >
                                                            <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1lohbqv">
                                                                Fee tier
                                                            </div>
                                                            <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                The % you will earn in fees.
                                                            </div>
                                                        </div>
                                                        <button
                                                            width="auto"
                                                            className="sc-bczRLJ cBKomN Button__BaseButton-sc-4f96dcd8-1 Button__ButtonGray-sc-4f96dcd8-5 ixVlAp jAJJVP"
                                                        >
                                                            Hide
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="FeeSelector__Select-sc-2b537477-1 dpNkPS">
                                                    <button className="sc-bczRLJ lbXqUa Button__BaseButton-sc-4f96dcd8-1 Button__ButtonOutlined-sc-4f96dcd8-7 eOoGds aQTri">
                                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                            <div className="Column__AutoColumn-sc-72c388fb-2 ezHOjM">
                                                                <div className="Column__AutoColumn-sc-72c388fb-2 gajsee">
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn FeeOption__ResponsiveText-sc-6b7ccec1-0 fYKQxG css-1lohbqv">
                                                                        0.01%
                                                                    </div>
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                        Best for very stable pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa Button__BaseButton-sc-4f96dcd8-1 Button__ButtonOutlined-sc-4f96dcd8-7 eOoGds aQTri">
                                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                            <div className="Column__AutoColumn-sc-72c388fb-2 ezHOjM">
                                                                <div className="Column__AutoColumn-sc-72c388fb-2 gajsee">
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn FeeOption__ResponsiveText-sc-6b7ccec1-0 fYKQxG css-1lohbqv">
                                                                        0.05%
                                                                    </div>
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                        Best for stable pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa Button__BaseButton-sc-4f96dcd8-1 Button__ButtonOutlined-sc-4f96dcd8-7 eOoGds aQTri">
                                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                            <div className="Column__AutoColumn-sc-72c388fb-2 ezHOjM">
                                                                <div className="Column__AutoColumn-sc-72c388fb-2 gajsee">
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn FeeOption__ResponsiveText-sc-6b7ccec1-0 fYKQxG css-1lohbqv">
                                                                        0.3%
                                                                    </div>
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                        Best for most pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa Button__BaseButton-sc-4f96dcd8-1 Button__ButtonOutlined-sc-4f96dcd8-7 eOoGds aQTri">
                                                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB gOYHMo BkVYr">
                                                            <div className="Column__AutoColumn-sc-72c388fb-2 ezHOjM">
                                                                <div className="Column__AutoColumn-sc-72c388fb-2 gajsee">
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn FeeOption__ResponsiveText-sc-6b7ccec1-0 fYKQxG css-1lohbqv">
                                                                        1%
                                                                    </div>
                                                                    <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-fczr0v">
                                                                        Best for exotic pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                                <div
                                    disabled=""
                                    className="Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt dRMJzS"
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
                                                        defaultValue=""
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
                                                        defaultValue=""
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
                                    className="Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 erfjwt dRMJzS"
                                >
                                    <div
                                        className="Column__AutoColumn-sc-72c388fb-2 erfjwt"
                                        style={{ minHeight: 200 }}
                                    >
                                        <div
                                            className="Column-sc-72c388fb-0 Column__ColumnCenter-sc-72c388fb-1 hAwhdH kValYi"
                                            style={{ height: "100%", justifyContent: "center" }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={56}
                                                height={56}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#FFFFFF"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                            </svg>
                                            <div className="text__TextWrapper-sc-9327e48a-0 iJbhaU css-2c5569">
                                                Your position will appear here.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        disabled=""
                                        className="Column__AutoColumn-sc-72c388fb-2 styled__DynamicSection-sc-a3e32a7b-2 gXqkQO dRMJzS"
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
                                                                                src="data:image/png;base64,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"
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
            </div>

        </div>

    )
}

export default LiquidityModal