import React, { useState, useEffect } from 'react';
import './Cart.css';
import CartModal from './CartModal/CartModal';

const Cart = ({ addToBag, setAddToBag, setIsCartVisible, onRemoveBagItem, cartModal, setCartModal, setIsModalOpen, }) => {
    const [totalEth, setTotalEth] = useState(0);
    const [showConnectWallet] = useState(true);

    useEffect(() => {
        let total = 0;
        addToBag?.forEach(item => {
            total += item.ethValue;
        });
        setTotalEth(total);
    }, [addToBag]);

    return (
        <React.Fragment>

            <div data-testid="nft-bag" className="Bag__BagContainer-sc-26f55410-0 mbicD">
                <div className="BagHeader__Wrapper-sc-f9c49788-3 OOdOb">
                    <div className="text__TextWrapper-sc-b23cf51f-0 iPDTcg css-1jyz67g">
                        Bag
                    </div>
                    <div className="BagHeader__CounterDot-sc-f9c49788-2 bFaCiP">{addToBag?.length}</div>
                    <button className="components_ButtonText-sc-12cffa39-3 BagHeader_ClearButton-sc-f9c49788-0 gCefrI IobEG"
                        onClick={() => setAddToBag([])}
                    >
                        Clear all
                    </button>
                    <button className="BagHeader__IconWrapper-sc-f9c49788-1 kmmWVR" onClick={() => setIsCartVisible(false)}>
                        <i style={{ fontSize: "24px" }} className="ri-close-line"></i>
                    </button>
                </div>

                {addToBag?.length === 0 && (
                    <div id='nftBagEmpty' className="_1klryar0 gKqRH">
                        <div className="_1klryar0 nft-bag-icon">
                            <i className="shopping-bag ri-shopping-bag-fill"></i>
                        </div>
                        <div className="_1klryar0 nft-bag-empty-text">
                            <div
                                className="your-bag"
                                data-testid="nft-empty-bag"
                            >
                                Your bag is empty
                            </div>
                            <div
                                className="nft-appear"
                            >
                                Selected NFTs will appear here
                            </div>
                        </div>
                    </div>
                )}


                <div className="_1klryar0 rgw6ezml rgw6ezs3 rgw6ez895 rgw6ez7zp rgw6ez59f rgw6ez6hf rgw6ez5yr rgw6ez4a9 rgw6ez8e1" />


                <div>
                    {addToBag?.map((item) => (
                        <div className="_1klryar0 rgw6ez44r rgw6ez473 rgw6ez3tf _1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct" id={item.id}>
                            <div className="_1klryar0 rgw6ez44f rgw6ez473" />
                            <div className="_1klryar0 rgw6ez44r rgw6ez473">
                                <a
                                    href="#/nfts/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/5795"
                                    style={{ textDecoration: "none" }}
                                    className="item-container"
                                >
                                    <div className="_1klryar0 rgw6ez44r rgw6ez46x rgw6ez3x _1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x">
                                        <div className="_1klryar0 rgw6ez48x rgw6ez44r">
                                            <img
                                                className="_1klryar0 rgw6ez46l rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p"
                                                // src="https://i.seadn.io/gae/wN0r-6Axvdo5evMruw97dBlaZTfK_7VCk9lXWI5SWubZD_0ako-sUpByCUgzc-o8ZgnLwgdVbY9_A4WqqkEpEO7Ztrb7oYQKcvCpjA?w=500&auto=format"
                                                src={item.image}
                                                alt={item.title || "NFT item"}
                                            />
                                        </div>
                                        <div className="_1klryar0 rgw6ez44r rgw6ez473 rgw6ez8bh rgw6ez16r rgw6ez4b9">
                                            <div className="_1klryar0 rgw6ez44r rgw6ez46x rgw6ez3x rgw6ez8bh rgw6ez16r rgw6ez45l">
                                                <div className="_1klryar0 _1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l">
                                                    {item.cardNumber}
                                                    {/* 7788 */}
                                                </div>
                                            </div>
                                            <div className="_1klryar0 rgw6ez44r rgw6ez46x rgw6ez3x rgw6ez8bh rgw6ez45l rgw6ez3sl">
                                                <div className="_1klryar0 rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf">
                                                    {item.title}
                                                    {/* BoredApeYachtClub */}
                                                </div>
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="rgw6ez3xr"
                                                >
                                                    <path
                                                        d="M4.52795 13.8056C4.52719 14.4043 4.6712 14.8474 4.95997 15.135C5.24798 15.4233 5.68496 15.5651 6.27091 15.5605H7.57497C7.62945 15.5585 7.68379 15.5676 7.73463 15.5873C7.78547 15.607 7.83176 15.6369 7.87062 15.6752L8.79884 16.5928C9.22054 17.0142 9.63382 17.2237 10.0387 17.2214C10.4436 17.2191 10.8569 17.0096 11.2786 16.5928L12.1954 15.6752C12.2356 15.6365 12.2832 15.6063 12.3354 15.5866C12.3876 15.5669 12.4433 15.558 12.499 15.5605H13.7951C14.3871 15.5613 14.8283 15.4171 15.1186 15.1281C15.4089 14.839 15.5541 14.3959 15.5541 13.7987V12.5014C15.5511 12.389 15.5923 12.2799 15.6687 12.1974L16.5854 11.2798C17.0125 10.86 17.2245 10.4467 17.2214 10.0399C17.2184 9.63305 17.0064 9.21935 16.5854 8.79878L15.6687 7.88115C15.592 7.79886 15.5509 7.68965 15.5541 7.57719V6.2799C15.5533 5.68191 15.4093 5.23878 15.1221 4.95049C14.8348 4.66221 14.3925 4.51806 13.7951 4.51806H12.499C12.4433 4.52036 12.3877 4.51138 12.3355 4.49168C12.2834 4.47197 12.2357 4.44193 12.1954 4.40336L11.2786 3.48574C10.8569 3.06439 10.4436 2.85487 10.0387 2.85717C9.63382 2.85946 9.22054 3.06898 8.79884 3.48574L7.87062 4.40336C7.83164 4.44148 7.78536 4.4713 7.73454 4.49101C7.68373 4.51072 7.62943 4.51993 7.57497 4.51806H6.27091C5.67961 4.51883 5.23995 4.66182 4.95194 4.94705C4.66393 5.23228 4.51992 5.67656 4.51992 6.2799V7.58063C4.52314 7.69309 4.48197 7.80229 4.40533 7.88459L3.48859 8.80222C3.06765 9.22203 2.85718 9.63572 2.85718 10.0433C2.85718 10.4509 3.07033 10.8653 3.49662 11.2867L4.41336 12.2043C4.48979 12.2867 4.53092 12.3958 4.52795 12.5083V13.8056Z"
                                                        fill="#FC72FF"
                                                    />
                                                    <path
                                                        d="M9.99737 12.4943C9.86205 12.7005 9.6623 12.8164 9.43032 12.8164C9.19191 12.8164 9.00504 12.7198 8.83106 12.4943L7.31036 10.6385C7.20082 10.5032 7.14282 10.3614 7.14282 10.2068C7.14282 9.88458 7.38768 9.63327 7.70342 9.63327C7.89673 9.63327 8.05138 9.70415 8.20603 9.90391L9.40455 11.4311L11.9498 7.34577C12.0851 7.12669 12.2591 7.02359 12.4524 7.02359C12.7553 7.02359 13.0388 7.23623 13.0388 7.55197C13.0388 7.70017 12.9615 7.85482 12.8777 7.99014L9.99737 12.4943Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="number-display-container">
                                            <div className="number-container">
                                                <div className="_1klryar0 rgw6ez44r rgw6ez473 rgw6ez3xr rgw6ez43">
                                                    <div className="_1klryar0 _1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr" >
                                                        {/* 28.75&nbsp;ETH */}
                                                        {/* {`${item.ethValue} ETH`} */}
                                                        <span className='' style={{ display: 'inline-block', marginRight: "20px" }}>
                                                            {`${item.ethValue} ETH `}

                                                        </span>

                                                    </div>
                                                    <div className="_1klryar0 rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf">
                                                        {/* $48,394.59 */}
                                                        <span className='' style={{ display: 'inline-block', marginRight: "20px" }}>

                                                            {`$${item.priceValue.toFixed(2)}`}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    size={1}
                                                    className="Button_BaseThemeButton-sc-983e32f-16 jGQBnY BagRow_RemoveButton-sc-3b559d1f-0 gbCQLu"
                                                    onClick={() => onRemoveBagItem(item)}>
                                                    <div className="Button__ButtonOverlay-sc-983e32f-0 hxfTDQ" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    ))}
                    {showConnectWallet && addToBag?.length > 0 && (
                        <div className="BagFooter__FooterContainer-sc-8e61f205-0 isERZK">
                            <div className="BagFooter__Footer-sc-8e61f205-1 gLQTOK">
                                <div className="Column-sc-72c388fb-0 BagFooter__FooterHeader-sc-8e61f205-2 fnQjPn ixcFPf">
                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 BagFooter__CurrencyRow-sc-8e61f205-3 hJYFVB pay-with fevJyp">
                                        <div className="Column-sc-72c388fb-0 fnQjPn">
                                            <div className="text__TextWrapper-sc-b23cf51f-0 gTElMf css-142zc9n">
                                                Pay with
                                            </div>
                                            <div className="sc-bczRLJ Row-sc-34df4f97-0 BagFooter__CurrencyInput-sc-8e61f205-8 hJYFVB pay-with hreuPu"
                                                onClick={() => setCartModal(true)}>
                                                <div
                                                    className="AssetLogo__LogoContainer-sc-c4f7aad2-3 Glgcn"
                                                    style={{ height: 24, width: 24 }}
                                                >
                                                    <div className="AssetLogo__LogoImageWrapper-sc-c4f7aad2-2 dzbfKw">
                                                        <img
                                                            src='/assets/images/tokens/eth-icon.png'
                                                            alt="ETH logo"
                                                            className="AssetLogo__LogoImage-sc-c4f7aad2-1 fRmRFb"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text__TextWrapper-sc-b23cf51f-0 iPDTcg css-1ompv5d"
                                                >
                                                    ETH
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#7D7D7D"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="Column-sc-72c388fb-0 BagFooter__TotalColumn-sc-8e61f205-4 fnQjPn jeiGFv">
                                            <div className="text__TextWrapper-sc-b23cf51f-0 gTElMf css-142zc9n">
                                                Total
                                            </div>
                                            <div className="text__TextWrapper-sc-b23cf51f-0 iPDTcg css-45h1g">
                                                {totalEth.toFixed(2)} ETH
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-bczRLJ Row-sc-34df4f97-0 BagFooter__PriceImpactContainer-sc-8e61f205-11 hJYFVB pay-with broPIr">
                                        {/* <div className="text__TextWrapper-sc-b23cf51f-0 bmvmkq css-1a4qi6e">
                                            $48,313.44
                                        </div> */}
                                    </div>
                                </div>
                                <button
                                    data-testid="nft-buy-button"
                                    className="BagFooter__ActionButton-sc-8e61f205-9 KXFgS"
                                    // onClick={() => setShowConnectWallet(false)}
                                    onClick={() => setIsModalOpen(true)}>
                                    Connect wallet
                                </button>
                            </div>
                        </div>)}
                </div>



            </div>

            <div>
                <CartModal cartModal={cartModal} setCartModal={setCartModal} />
            </div>
        </React.Fragment>

    )
}

export default Cart;