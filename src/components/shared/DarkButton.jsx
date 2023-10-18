import React from 'react';
import './styles/DarkButton.css';

const DarkButton = ({ darkMode, toggleMode }) => {
  return (
    <div className="dark__button">
      <input
        type="checkbox"
        id="darkModeButton"
        checked={darkMode}
        onChange={toggleMode}
      />
      <label htmlFor="darkModeButton" className={darkMode ? 'dark__mode' : ''}>
        <div className={`circle__btn ${darkMode ? 'dark__mode' : ''}`}></div>
      </label>
    </div>
  );
};

export default DarkButton;