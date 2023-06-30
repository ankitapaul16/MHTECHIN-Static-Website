import React, { useState } from 'react';
import './Codeboard.css';

const Codeboard = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [codeInputValue, setCodeInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Language');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRunCode = () => {
    // Execute code logic here
    // You can use the inputValue state to get the input value
    // Update the outputValue state with the output of the code execution
    // For demonstration purposes, let's assume the output is "Hello, World!"
    setOutputValue('Hello, World!');
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  const handleCodeInputChange = (event) => {
    setCodeInputValue(event.target.value);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="codeboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="dropdown">
            <button className="dropdown-btn">{selectedLanguage}</button>
            <div className="dropdown-content">
              {/* Language options */}
              <button className="dropdown-option" onClick={() => handleLanguageSelect('C')}>C</button>
              <button className="dropdown-option" onClick={() => handleLanguageSelect('C++')}>C++</button>
              <button className="dropdown-option" onClick={() => handleLanguageSelect('Python')}>Python</button>
              <button className="dropdown-option" onClick={() => handleLanguageSelect('JavaScript')}>JavaScript</button>
              <button className="dropdown-option" onClick={() => handleLanguageSelect('Java')}>Java</button>
              <button className="dropdown-option" onClick={() => handleLanguageSelect('PHP')}>PHP</button>
            </div>
          </div>
          <button className="navbar-btn">Download</button>
        </div>
        <div className="navbar-right">
          <button className="navbar-btn" onClick={handleRunCode}>
            Run
          </button>
        </div>
      </nav>

      {/* Code area */}
      <div className="code-area">
        <textarea
          value={codeInputValue}
          onChange={handleCodeInputChange}
          placeholder="// Write your code here"
          className="code-input"
        />
      </div>

      {/* Input */}
      <div className="input-container">
        <label className="input-label">
          <input type="checkbox" checked={showInput} onChange={handleToggleInput} />
          Test using input
        </label>
        {showInput && (
          <textarea className="input-box" value={inputValue} onChange={handleInputChange} placeholder="Enter input" style={{ height: '100%' }} />
        )}
      </div>

      {/* Output */}
      <div className="output-container">
        <h2 className="output-title">Output</h2>
        <div className="output-box">
          <pre>{outputValue}</pre>
        </div>
      </div>
    </div>
  );
};

export default Codeboard;
