import React from 'react';

function CustomDropdown({ selectedOption, toggleDropdown, isOpen, optionsLabel, handleOptionClick }) {
    return (
        <div className="custom-dropdown">
            <div className="selected-option" onClick={toggleDropdown}>
                <img src={selectedOption.imgSrc} alt={selectedOption.value} />
                <span className='dropdown'>
                    <i className="nav-dropdown ri-arrow-down-s-line"></i>
                </span>
            </div>
            {isOpen && (
                <ul className="options">
                    {optionsLabel.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            <div className='options-name'>
                                <img src={option.imgSrc} alt={option.label} />
                                <span>{option.label}</span>
                            </div>
                            <div>
                                {selectedOption.value === option.value && <i className="tick-icon ri-check-line"></i>}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomDropdown;
