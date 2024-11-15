import React, { useState } from 'react';
import { FaTv, FaNewspaper, FaPodcast, FaYoutube } from 'react-icons/fa';
import { FaRadio } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const HomeSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('tv-news');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const renderIcon = (option) => {
    switch (option) {
      case 'tv-news':
        return <FaTv size={20} className="select-icon" />;
      case 'radio':
        return <FaRadio size={20} className="select-icon" />;
      case 'publications':
        return <FaNewspaper size={20} className="select-icon" />;
      case 'podcasts':
        return <FaPodcast size={20} className="select-icon" />;
      case 'youtube':
        return <FaYoutube size={20} className="select-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="select-station-drop">
      <div className="select-container" onClick={() => setIsOpen(!isOpen)}>
        {renderIcon(selectedOption)}
        <span className="selected-option">{selectedOption}</span>
        <div className="select-tv-icon">
          <IoIosArrowDown size={20} />
        </div>
      </div>
      {isOpen && (
        <ul className="options-list">
          <li onClick={() => handleOptionClick('tv-news')} className="select-option">
            {renderIcon('tv-news')}TV News
          </li>
          <li onClick={() => handleOptionClick('radio')} className="select-option">
            {renderIcon('radio')}Radio
          </li>
          <li onClick={() => handleOptionClick('publications')} className="select-option">
            {renderIcon('publications')}Publications
          </li>
          <li onClick={() => handleOptionClick('podcasts')} className="select-option">
            {renderIcon('podcasts')}Podcasts
          </li>
          <li onClick={() => handleOptionClick('youtube')} className="select-option">
            {renderIcon('youtube')}YouTube
          </li>
        </ul>
      )}
    </div>
  );
};

export default HomeSelectOption;


