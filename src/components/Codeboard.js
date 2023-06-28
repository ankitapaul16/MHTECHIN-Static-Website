import React, { useState } from 'react';
import './Codeboard.css'; // Import the CSS file

const Codeboard = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [output, setOutput] = useState('');

  const handleInputChange = () => {
    setInputVisible(!isInputVisible);
  };

  const handleRunCode = () => {
    // Code execution logic here
    // Set the output value based on the result
    setOutput('Test cases or errors will be displayed here');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="editor-box">
            <div className="editor-navbar">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={isInputVisible} onChange={handleInputChange} />
                <label className="form-check-label">Input</label>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">Option 1</button></li>
                  <li><button className="dropdown-item" type="button">Option 2</button></li>
                  <li><button className="dropdown-item" type="button">Option 3</button></li>
                </ul>
              </div>
              <button className="btn btn-primary" type="button" onClick={handleRunCode}>Run</button>
              <button className="btn btn-success" type="button">Download</button>
            </div>
            <textarea className="form-control editor-textarea" rows="10"></textarea>
          </div>
          {isInputVisible && (
            <div className="input-box mt-3">
              <h5>Input:</h5>
              <textarea className="form-control" rows="5"></textarea>
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div className="output-box">
            <h5>Output:</h5>
            <div className="output-content">
              <div className="output-result">{output}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codeboard;
