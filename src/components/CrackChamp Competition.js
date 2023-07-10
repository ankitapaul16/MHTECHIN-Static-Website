// CrackChampCompetition.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import the LoginForm component
import './CrackChampCompetition.css';

const CrackChampCompetition = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic and set loggedIn state to true if successful
    setLoggedIn(true);
    navigate('/crackchamp/competition');
  };

  return (
    <div>
      {loggedIn ? (
        // Show the competition content when logged in
        <div>
          <h1>CrackChamp Competition</h1>
          {/* Add your competition content here */}
        </div>
      ) : (
        // Show the login form when not logged in
        <div>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default CrackChampCompetition;
