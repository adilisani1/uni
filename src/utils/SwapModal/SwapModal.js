import React from 'react';
import './SwapModal.css';

const SwapModal = ({ swapModal, setSwapModal }) => {

    return (
        <div>
            <div
                className={`sc-jajvtp-0 bmYGet`}
                data-reach-dialog-overlay=""
                style={{ display: swapModal ? 'flex' : 'none' }}
            >
                <div
                    aria-modal="true"
                    role="dialog"
                    tabIndex={-1}
                    aria-label="dialog"
                    className="sc-jajvtp-1 jBBXQD"
                    data-reach-dialog-content=""
                >
                    <div className="sc-1kykgp9-0 sc-1it7zu4-0 iCxowP fUHrnW">
                        <div className="sc-1kykgp9-2 sc-1xp9ndq-0 kqzAOQ eOCLUf">
                            <div id="cross-title" className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB fhPvJeh frnZMKK" >
                                <div className="css-xy7yfl">Select a token</div>
                                <span onClick={() => setSwapModal(false)}><i className="ri-close-line"></i></span>

                            </div>
                            <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB fhPvJeh">
                                <input
                                    type="text"
                                    id="token-search-input"
                                    data-testid="token-search-input"
                                    placeholder="Search name or paste address"
                                    autoComplete="off"
                                    className="sc-1xp9ndq-2 hxoNas"
                                    defaultValue=""
                                />
                            </div>
                            <div className="sc-1kykgp9-2 sc-jm24e0-0 kqyzGE gqQqei">
                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 hJYFVB cTSGxd bORAza">
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-ETH"
                                        className="sc-jm24e0-1 ipXHOd"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src='/assets/images/tokens/eth-icon.png'
                                                    alt="ETH logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">ETH</div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-DAI"
                                        className="sc-jm24e0-1 fosiKD"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
                                                    alt="DAI logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">DAI</div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-USDC"
                                        className="sc-jm24e0-1 fosiKD"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                                                    alt="USDC logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">USDC</div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-USDT"
                                        className="sc-jm24e0-1 fosiKD"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
                                                    alt="USDT logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">USDT</div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-WBTC"
                                        className="sc-jm24e0-1 fosiKD"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
                                                    alt="WBTC logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">WBTC</div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        data-testid="common-base-WETH"
                                        className="sc-jm24e0-1 fosiKD"
                                    >
                                        <div className="sc-12k1pn4-3 eLvYRk" style={{ marginRight: 8 }}>
                                            <div className="sc-12k1pn4-2 ckpBIe">
                                                <img
                                                    src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                                                    alt="WETH logo"
                                                    className="sc-12k1pn4-1 bwVixy"
                                                />
                                            </div>
                                        </div>
                                        <div className="css-xy7yfl">WETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-1xp9ndq-3 cbqHzZ" />
                        <div style={{ flex: "1 1 0%", position: "relative" }}>
                            <div style={{ overflow: "visible", height: 0 }}>
                                <div
                                    data-testid="currency-list-wrapper"
                                    className="sc-1e2o00j-5 kszyds"
                                >
                                    <div
                                        className="_1pi21y70"
                                        style={{
                                            position: "relative",
                                            height: 553,
                                            width: "100%",
                                            overflow: "auto",
                                            willChange: "transform",
                                            direction: "ltr"
                                        }}
                                    >
                                        <div style={{ height: 13552, width: "100%" }}>
                                            <div
                                                tabIndex={0}
                                                className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 sc-1xp9ndq-1 hJYFVB fhPvJeh frnZMKK edPdrxe token-item-ETHER"
                                                disabled=""
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    height: 56,
                                                    width: "100%"
                                                }}
                                            >
                                                <div className="sc-1kykgp9-0 iCxowP">
                                                    <div className="sc-12k1pn4-3 eLvYRk" style={{ opacity: 1 }}>
                                                        <div className="sc-12k1pn4-2 oJGcu">
                                                            <img
                                                                src="data:image/png;base64,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"
                                                                alt="ETH logo"
                                                                className="sc-12k1pn4-1 gxjzue"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-1kykgp9-2 jdTKGL" style={{ opacity: 1 }}>
                                                    <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB fhPvJeh">
                                                        <div
                                                            title="Ether"
                                                            className="sc-1e2o00j-2 dmGdpm css-vurnku"
                                                        >
                                                            Ether
                                                        </div>
                                                        <div className="sc-1e2o00j-4 wHspX" />
                                                    </div>
                                                    <div className="sc-sx9n2y-0 bqwbXT css-yfjwjl">ETH</div>
                                                </div>
                                                <div className="sc-1kykgp9-0 iCxowP">
                                                    <div
                                                        className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB fhPvJeh leSroW"
                                                        style={{ justifySelf: "flex-end" }}
                                                    />
                                                </div>
                                                <div
                                                    className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB fhPvJeh leSroW"
                                                    style={{ justifySelf: "flex-end" }}
                                                >
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
                                                        className="sc-1e2o00j-0 bZZPOo"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div
                                                tabIndex={0}
                                                className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 sc-1xp9ndq-1 hJYFVB fhPvJeh frnZMKK bPeMEk token-item-0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 56,
                                                    height: 56,
                                                    width: "100%"
                                                }}
                                            >
                                                <div className="sc-1kykgp9-0 iCxowP">
                                                    <div className="sc-12k1pn4-3 eLvYRk" style={{ opacity: 1 }}>
                                                        <div className="sc-12k1pn4-2 oJGcu">
                                                            <img
                                                                src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                                                                alt="WETH logo"
                                                                className="sc-12k1pn4-1 gxjzue"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-1kykgp9-2 jdTKGL" style={{ opacity: 1 }}>
                                                    <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB fhPvJeh">
                                                        <div
                                                            title="Wrapped Ether"
                                                            className="sc-1e2o00j-2 dmGdpm css-vurnku"
                                                        >
                                                            Wrapped Ether
                                                        </div>
                                                        <div className="sc-1e2o00j-4 wHspX" />
                                                    </div>
                                                    <div className="sc-sx9n2y-0 bqwbXT css-yfjwjl">WETH</div>
                                                </div>
                                                <div className="sc-1kykgp9-0 iCxowP">
                                                    <div
                                                        className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB fhPvJeh leSroW"
                                                        style={{ justifySelf: "flex-end" }}
                                                    />
                                                </div>
                                                <div
                                                    className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB fhPvJeh leSroW"
                                                    style={{ justifySelf: "flex-end" }}
                                                />
                                            </div>
                                            <div
                                                tabIndex={0}
                                                className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 sc-1xp9ndq-1 hJYFVB fhPvJeh frnZMKK bPeMEk token-item-0x111111111117dC0aa78b770fA6A738034120C302"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 112,
                                                    height: 56,
                                                    width: "100%"
                                                }}
                                            >
                                                <div
                                                    className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB fhPvJeh leSroW"
                                                    style={{ justifySelf: "flex-end" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="resize-triggers">
                                <div className="expand-trigger">
                                    <div style={{ width: 419, height: 345 }} />
                                </div>
                                <div className="contract-trigger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SwapModal