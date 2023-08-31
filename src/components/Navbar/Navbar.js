import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import Nftbag from './navbarbag.js';
import CustomDropdown from './dropdown.js';

import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';


const Navbar = ({ optionsLabel, searchOptions, switchTheme, currentTheme, isModalOpen, setIsModalOpen, handleCart, }) => {
    const logoImage = currentTheme === 'dark' ? '/assets/images/logo/logo-two.png' : '/assets/images/logo/logo-two-black.png';
    const location = useLocation();
    const [isActiveHeader, setIsActiveHeader] = useState(false);


    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setSearchOpen] = useState(false);


    const ref = useRef(null);

    const connectHandler = () => {
        setIsModalOpen(true)
    }

    //For header
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 50) {
                setIsActiveHeader(true);
            } else {
                setIsActiveHeader(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);



    const [selectedOption, setSelectedOption] = useState(optionsLabel[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredOptions = searchOptions.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //For closing search box
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    function determineTrendIcon(current, old) {
        if (current > old) {
            return <i style={{ color: "rgb(118, 209, 145)" }} className="trends-up-icon ri-arrow-right-up-line"></i>;
        } else if (current < old) {
            return <i style={{ color: "rgb(252, 83, 83)" }} className="trends-down-icon ri-arrow-right-down-line"></i>;
        }
        else if (current === old) {
            return <i style={{ color: "rgb(118, 209, 145)" }} className="trends-up-icon ri-arrow-right-up-line"></i>;
        }
        return null;
    }

    //Calculate Search `dropdown` rates
    function calculatePercentChange(current, old) {
        return Math.abs((current - old) / old * 100);
    }

    return (
        <React.Fragment>
            <div className={`sc-1dv6j2d-2 hirdVF ${isActiveHeader ? "sticky" : ""}`}>
                <header id="header" className="header">
                    <nav className="nav ">
                        {/* left________Nav */}
                        <div className="left-nav">
                            <NavLink className="logo-wrap" to="/">
                                <img className="logo-image" src={logoImage} />
                            </NavLink>
                            <div className="nav-menu" id="nav-menu">
                                <ul className="list-unstyled nav-list elYyfH">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/swap">Swap</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/tokens">Tokens</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/nfts">NFTs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/pools">Pools</NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" href="/download-uniswap"><i className="me-1 icons ri-apple-fill"></i>Download Uniswap Wallet</NavLink></li>
                                            <li><a className="dropdown-item" href="/vote">Vote in governance</a></li>
                                            <li><a className="dropdown-item" href="#">View more analytics</a></li>
                                            <div className='borderr'></div>
                                            <li><a className="dropdown-item" href="#">Help center</a></li>
                                            <li><a className="dropdown-item" href="#">Documentation</a></li>
                                            <li><a className="dropdown-item" href="#">Feedback</a></li>
                                            {/* <li><a className="dropdown-item" href="/privacy" onClick={privacyHandler}>Legal & Privacy</a></li> */}
                                            <li><a className="dropdown-item" href='/privacy'>Legal & Privacy</a></li>


                                            <div className="icons-wrapper">
                                                <a
                                                    className="discord"
                                                    href="https://discord.com/invite/FCfyBSbCU5"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src='/assets/images/discord-icon.svg' />
                                                </a>
                                                <a
                                                    className="twitter"
                                                    href="https://twitter.com/Uniswap"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src='/assets/images/twitter-icon.svg' />
                                                </a>
                                                <a
                                                    className="github"
                                                    href="https://github.com/Uniswap"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img style={{ width: "25px" }} src='/assets/images/github-icon.svg' />
                                                </a>
                                            </div>

                                        </ul>


                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/*center________Nav */}
                        <div className="center-nav">
                            <div className="custom-search-dropdown" ref={ref}>
                                <div className='custom-search-inside inside-search'>
                                    {/* <img className='search-icon' style={{ width: "20px" }} src='/images/search.svg' /> */}
                                    <i className="search-icon ri-search-line"></i>

                                    <input
                                        className=''
                                        type='search'
                                        placeholder='Search tokens and NFT collections'
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        onClick={() => setSearchOpen(true)}
                                    />
                                    <div className='slash' style={{ display: isSearchOpen ? 'none' : 'block' }}>/</div>
                                </div>

                                {isSearchOpen && (

                                    <ul className="search-options-box">
                                        <div className='options-box'>
                                            <div className='so'>
                                                <div className=''>

                                                    {filteredOptions.map((option, index) => (
                                                        <React.Fragment key={index}>
                                                            {option.price && !filteredOptions[index - 1]?.price && (

                                                                <div className='popular-tokens'>
                                                                    <div className="popular-title">
                                                                        <img className='rotate-arrow' src='assets/images/trends-arrow.png' />

                                                                        <div>Popular Tokens</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {/* title for popular NFTs */}
                                                            {option.floor && !searchOptions[index - 1]?.floor && (
                                                                <div className='popular-tokens'>
                                                                    <div className="popular-title">
                                                                        <img className='rotate-arrow' src='assets/images/trends-arrow.png' />
                                                                        <div>Popular NFTs</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <React.Fragment>
                                                                <div className='popular-tokens-item'>
                                                                    <a
                                                                        href='/tokens'
                                                                        className='tokens-options' onClick={() => {
                                                                            handleOptionClick(option);
                                                                            setSearchTerm(option.label);
                                                                            setSearchOpen(false);
                                                                        }}>
                                                                        <div className='left-item' >
                                                                            <div>
                                                                                <div className='img-div'>
                                                                                    <img src={option.imgSrc} alt={option.label} />
                                                                                </div>
                                                                                <div className='dCJIvZ'></div>
                                                                            </div>
                                                                            <div className='token-name'>
                                                                                <div className='token-name-value'>
                                                                                    <span>{option.label}</span>
                                                                                </div>
                                                                                <div className='symbol'>
                                                                                    {option.symbol && <span>{option.symbol}</span>}
                                                                                    <div className=''>
                                                                                        {option.items && <span> {option.items.toLocaleString()} items</span>}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='right-item'>
                                                                            {/* data for Tokens */}
                                                                            {option.price && (
                                                                                <React.Fragment>
                                                                                    <div>
                                                                                        <div className='price-item'>
                                                                                            <span className='price-text'>${option.price.toFixed(2)}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='percentage'>

                                                                                        <span>{determineTrendIcon(option.price, option.oldPrice)}</span>
                                                                                        <span className='percentage-text' style={{ color: option.price > option.oldPrice ? "rgb(118, 209, 145)" : "rgb(252, 83, 83)" }}>
                                                                                            <span>
                                                                                                {calculatePercentChange(option.price, option.oldPrice).toFixed(2)}%
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>

                                                                                </React.Fragment>
                                                                            )}
                                                                            {/* data for Floor */}
                                                                            {option.floor && (
                                                                                <React.Fragment>
                                                                                    <div className='floor-rate'>
                                                                                        <span>{option.floor.toFixed(2)} ETH</span>
                                                                                    </div>
                                                                                    <span className='floor-text'>
                                                                                        <p>Floor</p>
                                                                                    </span>
                                                                                </React.Fragment>
                                                                            )}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </React.Fragment>

                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* right________Nav */}
                        <div className="right-nav">
                            <div className="center-nav">
                                <div className="custom-search-dropdown" ref={ref}>
                                    <div className='custom-search-inside inside-search'>
                                        {/* <img className='search-icon' style={{ width: "20px" }} src='/images/search.svg' /> */}
                                        <i className="search-icon ri-search-line"></i>

                                        <input
                                            className=''
                                            type='search'
                                            placeholder='Search tokens and NFT collections'
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            onClick={() => setSearchOpen(true)}
                                        />
                                        <div className='slash' style={{ display: isSearchOpen ? 'none' : 'block' }}>/</div>
                                    </div>

                                    {isSearchOpen && (

                                        <ul className="search-options-box">
                                            <div className='options-box'>
                                                <div className='so'>
                                                    <div className=''>

                                                        {filteredOptions.map((option, index) => (
                                                            <React.Fragment key={index}>
                                                                {option.price && !filteredOptions[index - 1]?.price && (

                                                                    <div className='popular-tokens'>
                                                                        <div className="popular-title">
                                                                            <img className='rotate-arrow' src='assets/images/trends-arrow.png' />

                                                                            <div>Popular Tokens</div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                {/* title for popular NFTs */}
                                                                {option.floor && !searchOptions[index - 1]?.floor && (
                                                                    <div className='popular-tokens'>
                                                                        <div className="popular-title">
                                                                            <img className='rotate-arrow' src='assets/images/trends-arrow.png' />
                                                                            <div>Popular NFTs</div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <React.Fragment>
                                                                    <div className='popular-tokens-item'>
                                                                        <a
                                                                            href='/tokens'
                                                                            className='tokens-options' onClick={() => {
                                                                                handleOptionClick(option);
                                                                                setSearchTerm(option.label);
                                                                                setSearchOpen(false);
                                                                            }}>
                                                                            <div className='left-item' >
                                                                                <div>
                                                                                    <div className='img-div'>
                                                                                        <img src={option.imgSrc} alt={option.label} />
                                                                                    </div>
                                                                                    <div className='dCJIvZ'></div>
                                                                                </div>
                                                                                <div className='token-name'>
                                                                                    <div className='token-name-value'>
                                                                                        <span>{option.label}</span>
                                                                                    </div>
                                                                                    <div className='symbol'>
                                                                                        {option.symbol && <span>{option.symbol}</span>}
                                                                                        <div className=''>
                                                                                            {option.items && <span> {option.items.toLocaleString()} items</span>}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='right-item'>
                                                                                {/* data for Tokens */}
                                                                                {option.price && (
                                                                                    <React.Fragment>
                                                                                        <div>
                                                                                            <div className='price-item'>
                                                                                                <span className='price-text'>${option.price.toFixed(2)}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='percentage'>

                                                                                            <span>{determineTrendIcon(option.price, option.oldPrice)}</span>
                                                                                            <span className='percentage-text' style={{ color: option.price > option.oldPrice ? "rgb(118, 209, 145)" : "rgb(252, 83, 83)" }}>
                                                                                                <span>
                                                                                                    {calculatePercentChange(option.price, option.oldPrice).toFixed(2)}%
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>

                                                                                    </React.Fragment>
                                                                                )}
                                                                                {/* data for Floor */}
                                                                                {option.floor && (
                                                                                    <React.Fragment>
                                                                                        <div className='floor-rate'>
                                                                                            <span>{option.floor.toFixed(2)} ETH</span>
                                                                                        </div>
                                                                                        <span className='floor-text'>
                                                                                            <p>Floor</p>
                                                                                        </span>
                                                                                    </React.Fragment>
                                                                                )}
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </React.Fragment>

                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <button className='search-button'>
                                <i className="search-icon ri-search-line"></i>
                            </button>
                            {
                                (location.pathname === '/nfts' || location.pathname === '/nfts/:id')
                                    ?
                                    <Nftbag handleCart={handleCart} />
                                    : <CustomDropdown
                                        selectedOption={selectedOption}
                                        toggleDropdown={toggleDropdown}
                                        isOpen={isOpen}
                                        optionsLabel={optionsLabel}
                                        handleOptionClick={handleOptionClick}
                                    />
                            }
                            <div className='connect'>
                                <button className='connect-btn' onClick={connectHandler}> Connect</button>
                            </div>
                        </div>
                    </nav>
                </header>
                <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    switchTheme={switchTheme} />

            </div>

            {/* <Mobile Menu> */}

            <nav className="nav ">
                <ul className="mobile-nav ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/swap">Swap</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tokens">Tokens</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/nfts">NFTs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pools">Pools</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="ri-more-fill"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" href="/download-uniswap"><i className="me-1 icons ri-apple-fill"></i>Download Uniswap Wallet</NavLink></li>
                            <li><a className="dropdown-item" href="/vote">Vote in governance</a></li>
                            <li><a className="dropdown-item" href="#">View more analytics</a></li>
                            <div className='borderr'></div>
                            <li><a className="dropdown-item" href="#">Help center</a></li>
                            <li><a className="dropdown-item" href="#">Documentation</a></li>
                            <li><a className="dropdown-item" href="#">Feedback</a></li>
                            {/* <li><a className="dropdown-item" href="/privacy" onClick={privacyHandler}>Legal & Privacy</a></li> */}
                            <li><a className="dropdown-item" href='/privacy'>Legal & Privacy</a></li>


                            <div className="icons-wrapper">
                                <a
                                    className="discord"
                                    href="https://discord.com/invite/FCfyBSbCU5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src='/assets/images/discord-icon.svg' />
                                </a>
                                <a
                                    className="twitter"
                                    href="https://twitter.com/Uniswap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src='/assets/images/twitter-icon.svg' />
                                </a>
                                <a
                                    className="github"
                                    href="https://github.com/Uniswap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img style={{ width: "25px" }} src='/assets/images/github-icon.svg' />
                                </a>
                            </div>

                        </ul>


                    </li>
                </ul>
            </nav>
        </React.Fragment>

    );
}

export default Navbar;
