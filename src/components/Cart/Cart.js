import React from 'react'
import './Cart.css';
const Cart = () => {

    return (
        <div>
            <div data-testid="nft-bag" className="Bag__BagContainer-sc-1a600dfd-0 gUxCde">
                <div className="BagHeader__Wrapper-sc-d761a2a3-3 diQPU">
                    <div className="text__TextWrapper-sc-9327e48a-0 ikeywd css-iapcxi">Bag</div>
                    <button className="BagHeader__IconWrapper-sc-d761a2a3-1 wHhUA textclr">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="--var(color-white)"
                            xmlns="http://www.w3.org/2000/svg"
                            data-testid="nft-bag-close-icon"
                        >
                            <path
                                d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L18.7071 6.70711ZM5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L5.29289 17.2929ZM6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.70711 5.29289ZM17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L17.2929 18.7071ZM17.2929 5.29289L5.29289 17.2929L6.70711 18.7071L18.7071 6.70711L17.2929 5.29289ZM5.29289 6.70711L17.2929 18.7071L18.7071 17.2929L6.70711 5.29289L5.29289 6.70711Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="_1klryar0 rgw6ez44v rgw6ez477 EmptyContent__StyledColumn-sc-328ca12-0 ldKUzF">
                    <div className="_1klryar0 rgw6ez44v rgw6ez47p rgw6ez3j textclr">
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="96px"
                            height="96px"
                            viewBox="0 0 24 24"
                            color="var(--genie-colors-textTertiary)"
                            strokeWidth="1px"
                        >
                            <path
                                d="M19.2893 5H4.5115C3.34557 5 2.40039 5.89543 2.40039 7V21C2.40039 22.1046 3.34557 23 4.5115 23H19.2893C20.4552 23 21.4004 22.1046 21.4004 21V7C21.4004 5.89543 20.4552 5 19.2893 5Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 5L9 4.25C9 3.45435 9.31607 2.69129 9.87868 2.12868C10.4413 1.56607 11.2044 1.25 12 1.25C12.7957 1.25 13.5587 1.56607 14.1213 2.12868C14.6839 2.69129 15 3.45435 15 4.25L15 5"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez3tv">
                        <div
                            className="_1klryar0 rgw6ez44v rgw6ez47p rgw6ez3j rgw6ezcv rgw6ezb1 rgw6ezed textclr"
                            data-testid="nft-empty-bag"
                            style={{ lineHeight: 2 }}
                        >
                            Your bag is empty
                        </div>
                        <div
                            className="_1klryar0 rgw6ez44v rgw6ez47p rgw6ez3j rgw6ezap rgw6ezcp rgw6ez4ep"
                            style={{ lineHeight: 0 }}
                        >
                            Selected NFTs will appear here
                        </div>
                    </div>
                </div>
                <div className="_1klryar0 rgw6ezmp rgw6ezs7 rgw6ez7jr rgw6ez7ab rgw6ez547 rgw6ez63p rgw6ez5op rgw6ez4ad rgw6ez7on" />
                <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez3tj _1jcz50r1 rgw6ez2ej rgw6ez2k1 rgw6ez1yv rgw6ez7nf">
                    <div className="_1klryar0 rgw6ez44j rgw6ez477" />
                    <div className="_1klryar0 rgw6ez44v rgw6ez477" />
                </div>
            </div>
        </div>
    )
}

export default Cart