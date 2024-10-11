
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.style.css";

const CustomDropdown = ({ filterName, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const arrowUP = <FontAwesomeIcon icon={faChevronUp} />;
    const arrowDN = <FontAwesomeIcon icon={faChevronDown} />;

    useEffect(() => {
        if (!selectedOption && options.length > 0) {
            setSelectedOption(options[0]);
        }
    }, [options, selectedOption]);

    const handleDropClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleUnselectAll = () => {
        setSelectedOption(null);
    };

    return (
        <>
            <div className="dropDownContainer">
                <div className="filtername" onClick={handleDropClick}>
                    <div className="title">
                        <h4>{filterName}</h4>
                        <span className="arrow">{isOpen ? arrowUP : arrowDN}</span>
                    </div>
                    <p>{selectedOption ? selectedOption : "All"}</p>
                </div>
                {isOpen && (
                    <div className="options">
                        {options.map((opt, index) => (
                            <label key={index} htmlFor={opt}>
                            <input
                              type="checkbox"
                              id={opt} // Unique id for each option
                              name={opt}
                              value={opt}
                              checked={opt === selectedOption} // Keep this for highlighting selected options
                              onChange={() => handleOptionClick(opt)} // Update state on option click
                            />
                            {opt}
                          </label>
                        ))}
                    </div>
                )}
            </div>
            <hr />
        </>
    );
};

export default CustomDropdown;
