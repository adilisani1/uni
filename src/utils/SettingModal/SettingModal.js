import React from 'react';
import './SettingModal.css';

const SettingModal = () => {
    return (
        <div className="imhdhD">
            <div className="Column__AutoColumn-sc-72c388fb-2 Settings__MenuFlyout-sc-6676197f-1 gXqkQO fkhvJx">
                <div className="Column__AutoColumn-sc-72c388fb-2 uniswapx">
                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB cPkaXY BkVYr">
                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB settings-modal jeYuAz">
                            <div className="Column-sc-72c388fb-0 fnQjPn">
                                <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-1jljtub">
                                    <div
                                        width="auto"
                                        className="sc-bczRLJ Row-sc-34df4f97-0 jPOzlZ dTUjrT"
                                        style={{ display: "inline-flex" }}
                                    >
                                        <i className="lightining ri-flashlight-fill"></i>

                                        <div className="UniswapXRouterLabel__Gradient-sc-e805e4b5-0 XqKWa">
                                            <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-1xt5qxb">
                                                UniswapX
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-4u0e4f">
                                    When available, aggregates liquidity sources for better prices and
                                    gas free swaps.{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://support.uniswap.org/hc/en-us/articles/17515415311501"
                                        className="components__StyledLink-sc-81cd496b-9 rCUQQ"
                                    >
                                        <div className="text__TextWrapper-sc-9327e48a-0 blhgKn RouterPreferenceSettings__InlineLink-sc-4958776c-0 iPLSoH css-4u0e4f">
                                            Learn more
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button
                            id="toggle-uniswap-x-button"
                            data-testid="toggle-uniswap-x-button"
                            role="option"
                            aria-selected="false"
                            className="Toggle__Wrapper-sc-405c1245-0 cOnDjy"
                        >
                            <span className="Toggle__ToggleElement-sc-405c1245-1 dqIabT" />
                        </button>
                    </div>
                    <div className="components__Divider-sc-81cd496b-33 gFmEMo" />
                    <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB cPkaXY BkVYr">
                        <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowFixed-sc-34df4f97-4 hJYFVB settings-modal jeYuAz">
                            <div className="Column-sc-72c388fb-0 fnQjPn">
                                <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-1jljtub">
                                    Local routing
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: 114,
                        overflow: "hidden",
                        width: "100%",
                        minWidth: "min-content",
                        willChange: "height"
                    }}
                >
                    <div>
                        <div className="Column__AutoColumn-sc-72c388fb-2 Settings__ExpandColumn-sc-6676197f-2 gXqkQO bPIWKe">
                            <div className="components__Divider-sc-81cd496b-33 gFmEMo" />
                            <div className="Column-sc-72c388fb-0 hAwhdH">
                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB settings-modal BkVYr">
                                    <div
                                        width="auto"
                                        className="sc-bczRLJ Row-sc-34df4f97-0 jPOzlZ bTQDrP"
                                    >
                                        <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-1jljtub">
                                            Max slippage
                                        </div>
                                        <span
                                            style={{ marginLeft: 4, display: "flex", alignItems: "center" }}
                                        >
                                            <div className="Popover__ReferenceElement-sc-f19d15a-1 bndAvc">
                                                <div className="QuestionHelper__QuestionWrapper-sc-76ddd2cf-0 izoILe">
                                                    <span className="QuestionHelper__QuestionMark-sc-76ddd2cf-1 bEjIrx">

                                                        <i style={{ fontSize: "18px" }} className="question-icon ri-question-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div
                                        data-testid="max-slippage-settings"
                                        aria-expanded="false"
                                        className="sc-bczRLJ Row-sc-34df4f97-0 Expand__ButtonContainer-sc-c6541f6c-0 hJYFVB settings-modal kwEKCQ"
                                    >
                                        <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1jljtub">
                                            Auto
                                        </div>
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
                                            className="Expand__ExpandIcon-sc-c6541f6c-1 kdjsvs"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: 0,
                                        overflow: "hidden",
                                        width: "100%",
                                        minWidth: "min-content",
                                        willChange: "height"
                                    }}
                                >
                                    <div>
                                        <div className="Column-sc-72c388fb-0 Expand__Content-sc-c6541f6c-2 eqAZdA dKVRAc">
                                            <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB bObhWT BkVYr">
                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 MaxSlippageSettings__Switch-sc-ab328b30-1 hJYFVB settings-modal krAXBK">
                                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 MaxSlippageSettings__Option-sc-ab328b30-0 hJYFVB settings-modal ccVORp">
                                                        <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1jljtub">
                                                            Auto
                                                        </div>
                                                    </div>
                                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 MaxSlippageSettings__Option-sc-ab328b30-0 hJYFVB settings-modal jYYYB">
                                                        <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1jljtub">
                                                            Custom
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Input__InputContainer-sc-ddc3b6a9-1 hJYFVB bObhWT gjcFql">
                                                    <input
                                                        data-testid="slippage-input"
                                                        placeholder="0.50"
                                                        className="Input-sc-ddc3b6a9-0 bqpUJc"
                                                        defaultValue=""
                                                    />
                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1jljtub">
                                                        %
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="components__Divider-sc-81cd496b-33 gFmEMo" />
                            <div className="Column-sc-72c388fb-0 hAwhdH">
                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Row__RowBetween-sc-34df4f97-1 hJYFVB settings-modal BkVYr">
                                    <div
                                        width="auto"
                                        className="sc-bczRLJ Row-sc-34df4f97-0 jPOzlZ bTQDrP"
                                    >
                                        <div className="text__TextWrapper-sc-9327e48a-0 fbSdRZ css-1jljtub">
                                            Transaction deadline
                                        </div>
                                        <span
                                            style={{ marginLeft: 4, display: "flex", alignItems: "center" }}
                                        >
                                            <div className="Popover__ReferenceElement-sc-f19d15a-1 bndAvc">
                                                <div className="QuestionHelper__QuestionWrapper-sc-76ddd2cf-0 izoILe">
                                                    <span className="QuestionHelper__QuestionMark-sc-76ddd2cf-1 bEjIrx">
                                                        <i style={{ fontSize: "18px" }} className="question-icon ri-question-line"></i>

                                                    </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div
                                        data-testid="transaction-deadline-settings"
                                        aria-expanded="false"
                                        className="sc-bczRLJ Row-sc-34df4f97-0 Expand__ButtonContainer-sc-c6541f6c-0 hJYFVB settings-modal kwEKCQ"
                                    >
                                        30m
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
                                            className="Expand__ExpandIcon-sc-c6541f6c-1 kdjsvs"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: 0,
                                        overflow: "hidden",
                                        width: "100%",
                                        minWidth: "min-content",
                                        willChange: "height"
                                    }}
                                >
                                    <div>
                                        <div className="Column-sc-72c388fb-0 Expand__Content-sc-c6541f6c-2 eqAZdA dKVRAc">
                                            <div className="sc-bczRLJ Row-sc-34df4f97-0 hJYFVB auto-dropdown">
                                                <div className="sc-bczRLJ Row-sc-34df4f97-0 Input__InputContainer-sc-ddc3b6a9-1 hJYFVB bObhWT gjcFql">
                                                    <input
                                                        data-testid="deadline-input"
                                                        placeholder={30}
                                                        className="Input-sc-ddc3b6a9-0 bqpUJc"
                                                        defaultValue=""
                                                    />
                                                    <div className="text__TextWrapper-sc-9327e48a-0 blhgKn css-1jljtub">
                                                        minutes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SettingModal