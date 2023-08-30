import React, { useState, useEffect } from 'react';
import './NftsDetails.css';
import { useParams } from 'react-router-dom';

const NftsDetails = ({ allTableDataETH, allTableDataUSD }) => {

    const [isHovered, setIsHovered] = useState(false);

    const cardData = [
        {
            id: 1,
            image: "https://cdn.center.app/v2/1/b3f42ad408226d768e31432539609c37cf97ee548cfbd7bc468aa6fbebec3d50/11ff5077bf74434942c3f0354d153285137192d6d8dc21303af7134125e6e994.png",
            cardNumber: 7730,
            serialNumber: 1682,
            ethValue: 28.5
        },
        {
            id: 2,
            image: "https://cdn.center.app/v2/1/72da0239d4ae18ca5bba2dbdab42e7cb22527bb1034f61da26ce5bc7d66ded4f/e59de98b066e0247a1c4199c9a63cee7abb95fcc785848a15f984a7597c719a9.png",
            cardNumber: 7564,
            serialNumber: 1659,
            ethValue: 29
        }
    ]

    const { id } = useParams();
    const [data, setData] = useState(null);

    const [currency, setCurrency] = useState('ETH');

    useEffect(() => {
        const nftsDetails = () => {
            let dataset = currency === 'ETH' ? allTableDataETH : allTableDataUSD;
            const singleNfts = dataset.filter((item) => item.id === Number(id));

            if (singleNfts.length > 0) {
                setData(singleNfts[0]);
            } else {
                console.log('No NFT found with the given ID');
            }
        };

        nftsDetails();
    }, [id, allTableDataETH, allTableDataUSD, currency]);


    return (
        <div>
            <div className="sc-1dv6j2d-0 bCNYil">

                <div
                    data-testid="popups"
                    className="sc-1kykgp9-2 sc-fo3pji-2 kqyYZZ hoPRWs"
                />
                <div className="sc-1evvmet-0 kopCVp">
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
                        className="sc-1evvmet-2 bqwZaK"
                    >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    <div className="sc-1kykgp9-2 hinRyL">
                        <div className="sc-sx9n2y-0 EngNh css-10k34qy">
                            Uniswap in your pocket
                        </div>
                    </div>
                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-1evvmet-1 hJYFVB fhPvJh hMzltt">
                        <button
                            width="125px"
                            className="sc-bczRLJ jnEFg sc-fwrjc2-1 sc-1evvmet-3 hgZoRv cXqfrP"
                        >
                            <div className="sc-sx9n2y-0 bhqxth css-18hn7mq">Learn more</div>
                        </button>
                    </div>
                </div>
                <div
                    className="sc-1kykgp9-0 sc-vlvksq-1 iCxowP jTBxFw"
                    style={{ width: "calc(100% - 0px)" }}
                >
                    <div className="sc-vlvksq-3 eEURgl">
                        <div
                            src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=1517"
                            className="sc-vlvksq-4 iqUAEN"
                        />
                    </div>
                    <div className="sc-1kykgp9-0 sc-vlvksq-5 iCxowP jCWKjc">
                        <div className="_1klryar0 rgw6ez44v rgw6ezvp rgw6ez47p rgw6ez491 rgw6ez477 rgw6ez16v">
                            <img
                                className="_1klryar0 rgw6ez4o1 rgw6ez7cj rgw6ez48p jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p"
                                src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"
                            />
                            <div className="_1klryar0 jinxmn1 rgw6ezwj rgw6ezye rgw6ezf7 rgw6ezhe">
                                <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez48j">
                                    <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez1m7">
                                        <div className="sc-1o7m3gg-1 hTeDjw rgw6ezd1 rgw6ezbj rgw6ezep">
                                            Bored Ape Yacht Club
                                        </div>
                                        <img style={{ width: "25px" }} src='/assets/images/verified-icon.png' />
                                        <div className="_1klryar0 rgw6ez44j rgw6ez44w rgw6ez471 rgw6ez3j rgw6ez47p rgw6ezn1 rgw6ez3t7 rgw6ez1a1">
                                            <a
                                                className="_1klryar0 _1klryar9 rgw6ez44v rgw6ez477 rgw6ez1dv rgw6ez47p"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://discord.gg/3P5K3dzgdB"
                                            >
                                                <i style={{ fontSize: "22px" }} className="ri-discord-fill"></i>

                                            </a>
                                            <a
                                                className="_1klryar0 _1klryar9 rgw6ez44v rgw6ez477 rgw6ez1dv rgw6ez47p"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://twitter.com/BoredApeYC"
                                            >

                                                <i style={{ fontSize: "22px" }} className="ri-twitter-fill"></i>

                                            </a>
                                            <a
                                                className="_1klryar0 _1klryar9 rgw6ez44v rgw6ez477 rgw6ez1dv rgw6ez47p"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://instagram.com/boredapeyachtclub"
                                            >
                                                <i style={{ fontSize: "22px" }} className="ri-instagram-line"></i>

                                            </a>
                                            <a
                                                className="_1klryar0 _1klryar9 rgw6ez44v rgw6ez477 rgw6ez1dv rgw6ez47p"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="http://www.boredapeyachtclub.com/"
                                            >
                                                <i style={{ fontSize: "22px" }} className="ri-global-line"></i>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="_1klryar0 rgw6ezwv rgw6ezx8"
                                    style={{ maxWidth: 680 }}
                                >
                                    <div className="sc-1o7m3gg-4 hqCXLW rgw6ezcp rgw6ezb1 rgw6ezed">
                                        <span>
                                            The Bored Ape Yacht Club is a collection of 10,000 unique Bored
                                            Ape NFTs— unique digital collectibles living on the Ethereum
                                            blockchain. Your Bored Ape doubles as your Yacht Club membership
                                            card, and grants access to members-only benefits, the first of
                                            which is access to THE BATHROOM, a collaborative graffiti board.
                                            Future areas and perks can be unlocked by the community through
                                            roadmap activation. Visit www.BoredApeYachtClub.com for more
                                            details.
                                        </span>
                                    </div>
                                </div>
                                <div className="_1klryar0 rgw6ez44j rgw6ez44w rgw6ez471 rgw6ez3j rgw6ez3ud rgw6ez3uw rgw6ez3v9 rgw6ez3vy rgw6ez7m3 rgw6ezxj">
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            24.4 ETH
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Global floor
                                        </span>
                                    </div>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            <div className="sc-1o7m3gg-0 hipPoV">
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
                                                    aria-label="up"
                                                    className="sc-1nu6e54-0 eFTjTe"
                                                >
                                                    <line x1={7} y1={17} x2={17} y2={7} />
                                                    <polyline points="7 7 17 7 17 17" />
                                                </svg>
                                                1%
                                            </div>
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Floor 24H
                                        </span>
                                    </div>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            1.3M ETH
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Total volume
                                        </span>
                                    </div>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            10K
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Items
                                        </span>
                                    </div>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            56%
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Unique owners
                                        </span>
                                    </div>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                        <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                            2%
                                        </div>
                                        <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                            Listed
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="nft-anchor-mobile" />
                            <div className="_1klryar0 rgw6ez44v rgw6ez44k rgw6ez471 rgw6ez3j rgw6ez3ud rgw6ez3uw rgw6ez3v9 rgw6ez3vy rgw6ezxj rgw6ezgd">
                                <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        24.4 ETH
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Global floor
                                    </span>
                                </div>
                                <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        <div className="sc-1o7m3gg-0 hipPoV">
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
                                                aria-label="up"
                                                className="sc-1nu6e54-0 eFTjTe"
                                            >
                                                <line x1={7} y1={17} x2={17} y2={7} />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                            1%
                                        </div>
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Floor 24H
                                    </span>
                                </div>
                                <div className="_1klryar0 rgw6ez44v rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        1.3M ETH
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Total volume
                                    </span>
                                </div>
                                <div className="_1klryar0 rgw6ez44j rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        10K
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Items
                                    </span>
                                </div>
                                <div className="_1klryar0 rgw6ez44j rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        56%
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Unique owners
                                    </span>
                                </div>
                                <div className="_1klryar0 rgw6ez44j rgw6ez477 rgw6ez41 rgw6ez3sp rgw6ez1e1">
                                    <div className="sc-sx9n2y-0 nft-card-text jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej css-rjqmed">
                                        2%
                                    </div>
                                    <span className="_1klryar0 jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p">
                                        Listed
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="nft-anchor" />
                        <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez3ud rgw6ezgp sc-dvc2od-0 jasESJ">
                            <button className="_1klryar0 _1wiwg135 _1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ej">
                                Items
                            </button>
                            <button
                                className="_1klryar0 _1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ep"
                                data-testid="nft-activity"
                            >
                                Activity
                            </button>
                        </div>
                    </div>
                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-vlvksq-8 hJYFVB fhPvJh ekDvgt">
                        <div className="sc-vlvksq-6 gLTHgA" />
                        <div
                            className="sc-vlvksq-2 bOrLvK"
                            style={{ transform: "translate(0px)", width: "calc(100% - 0px)" }}
                        >
                            <div className="_1klryar0 rgw6ez6cp rgw6ez497 rgw6ez3j1 rgw6ez16v rgw6ez3qj rgw6ezg1 rgw6ezh2 rgw6ez2p7 rgw6ez28p">
                                <div className="sc-1wq7ulh-0 eTLJwt">
                                    <div className="sc-1wq7ulh-1 hvldfs">
                                        <div
                                            className="_1klryar0 rgw6ez44v rgw6ez3t7 rgw6ez7bj rgw6ezb1 rgw6ez79z rgw6ez491 rgw6ez2ud rgw6ez17v rgw6ez1ap rgw6ez45p rgw6ez4gv rgw6ez6dv rgw6ez4ej _1liwdzo1 d-flex align-items-center"
                                            data-testid="nft-filter"
                                        >
                                            <i style={{ fontSize: "22px" }} className="ri-filter-line "></i>

                                            <div className="_1klryar0 rgw6ezd1 rgw6ezb1 rgw6eze7">
                                                {" "}
                                                Filter • 9,998 results
                                            </div>
                                        </div>
                                        <div className="sc-1wq7ulh-2 iiQqEu">
                                            <div className="_1klryar0 rgw6ez7bj" style={{ width: 255 }}>
                                                <button className="_1klryar0 rgw6ezav rgw6ez7bj rgw6ez7a7 rgw6ez4ov rgw6ez511 rgw6ez7jr rgw6ez2u1 rgw6ez4ej rgw6ez45p rgw6ez44v rgw6ez48j rgw6ez3j rgw6ez181 rgw6ez79z">
                                                    <div className="_1klryar0 rgw6ez44v rgw6ez3j rgw6ez4ej">
                                                        <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j">
                                                            <i style={{ fontSize: "22px" }} className="ri-arrow-up-down-line "></i>

                                                        </div>
                                                        <div className="_1klryar0 rgw6ezl7 rgw6ezq7 rgw6ez4ej rgw6ezd1 rgw6ezb1 rgw6eze7">
                                                            Price: Low to High
                                                        </div>
                                                    </div>

                                                </button>
                                                <div
                                                    className="_1klryar0 rgw6ez48p rgw6ez3qj rgw6ez181 rgw6ez3ev rgw6ez281 rgw6ezav rgw6ez4p1 rgw6ez7ab rgw6ez511 rgw6ez7jr rgw6ez7bb rgw6ez7cn rgw6ez7e7 rgw6ez7n7 rgw6ez7on rgw6ez44j rgw6ez46p rgw6ezvp _12q7kth1"
                                                    style={{ top: "inherit", left: "inherit" }}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            className="_1klryar0 _1klryar8 _1klryar5 _1klryar4 rgw6ez43d rgw6ez511 rgw6ez4zg rgw6ez7jv rgw6ez7ab rgw6ez7bj rgw6ez2ud rgw6ez6cj rgw6ez1kd rgw6ez1m7 rgw6ezb1 rgw6ez1ap rgw6ez4f0 rgw6ez4ej"
                                            placeholder="Search by name"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div
                                        className="sc-1wq7ulh-6 jVXqrs rgw6ezd1 rgw6ezb1 rgw6eze7"
                                        data-testid="nft-sweep-button"
                                    >
                                        <img style={{ width: "20px" }} src='/assets/images/sweep-icon.png' />
                                        <div className="sc-sx9n2y-0 kandXm sc-1wq7ulh-7 dNbQjm css-1xhs0h0">
                                            Sweep
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-1wq7ulh-5 eZUlEX">
                                    <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez2np rgw6ez3t7 rgw6ez447" />
                                </div>
                            </div>
                            <div className="sc-1wq7ulh-5 eZUlEX">
                                <div className="infinite-scroll-component__outerdiv">
                                    <div
                                        className="infinite-scroll-component _1w5t04p1 rgw6ez45d rgw6ez3t7 rgw6ez3t8 rgw6ez3tl rgw6ez3ty"
                                        style={{ height: "auto", overflow: "unset" }}
                                    >
                                        {cardData.map((item) => {
                                            return (
                                                <div
                                                    draggable="false"
                                                    data-testid="nft-collection-asset"
                                                    className={`jtXgVB ${isHovered ? 'hovered' : ''}`}
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                >
                                                    <a
                                                        className="sc-1xox0sw-4 qzRBv"
                                                        href="#/nfts/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7730?origin=collection"
                                                    >
                                                        <div className="sc-ckzh1u-0 hPMtfS">
                                                            <div className="sc-p1llhj-0 kcxohQ">
                                                                <img style={{ width: "23px" }} src='/assets/images/card-top-ship-icon.png' />
                                                            </div>
                                                            <div className="sc-bczRLJ sc-nrd8cx-0 sc-ckzh1u-1 hJYFVB fhPvJh jJAluP">
                                                                <img
                                                                    src={item.image}
                                                                    draggable="false"
                                                                    className="sc-ckzh1u-2 iKjeyI"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="sc-1xox0sw-0 CeCJo">
                                                            <div className="sc-1kykgp9-0 sc-1xox0sw-1 iCxowP iVpcBV">
                                                                <div className="sc-1kykgp9-0 sc-1xox0sw-5 iCxowP elMfJn">
                                                                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-1xox0sw-6 hJYFVB fhPvJh kXprDM">
                                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-1xox0sw-7 hJYFVB fhPvJh ljFlTN">
                                                                            <div className="sc-sx9n2y-0 nft-card-text sc-1xox0sw-8 bJsrtS css-zhpkf8">
                                                                                {`#${item.cardNumber}`}
                                                                            </div>
                                                                        </div>
                                                                        <div className="sc-sx9n2y-0 nft-card-text sc-p1llhj-5 vdwqu css-4u0e4f">
                                                                            <div className="sc-d5tbhs-1 cSretk">
                                                                                <div>
                                                                                    {`#${item.serialNumber}`}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-1xox0sw-9 hJYFVB fhPvJh kcmrbX">
                                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-1xox0sw-10 hJYFVB fhPvJh fbXHIv">
                                                                            <div className="sc-sx9n2y-0 nft-card-text sc-1xox0sw-11 GJoxE css-1jljtub">
                                                                                {`${item.ethValue} ETH`}

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`nft-card-text  css-zhpkf8 cpLvLV ${isHovered ? 'visible' : ''}`}>
                                                            Add to bag
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_1klryar0 rgw6ez44j rgw6ez44k rgw6ez471 rgw6ez3j rgw6ez48v rgw6ez32j rgw6ez35p rgw6ez3b7 rgw6ez4p1 rgw6ez2u1 rgw6ez3qv rgw6ez7bb rgw6ez48j">
                    <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez3t7">
                        <div className="_1klryar0 rgw6ez491" style={{ width: 34, height: 34 }} />
                        <div className="_1klryar0 rgw6ez44v rgw6ez477">
                            <div className="_1klryar0 rgw6ezd1 rgw6ezcp rgw6ezb1 rgw6ezed">
                                0 NFTs
                            </div>
                            <div className="_1klryar0 rgw6ez44v rgw6ez471 rgw6ez3j rgw6ez3t7">
                                <div className="_1klryar0 rgw6ezcp rgw6ezb1 rgw6ezed">- ETH</div>
                                <div className="_1klryar0 rgw6ez4ep rgw6ezcp rgw6ezav rgw6eze7">
                                    -
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_1klryar0 rgw6ezd1 rgw6ezav rgw6eze1 rgw6ez2ed rgw6ez2jv rgw6ez2oj rgw6ez281 rgw6ez4c7 rgw6ez6ap rgw6ez7bj rgw6ez79z">
                        View bag
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NftsDetails;