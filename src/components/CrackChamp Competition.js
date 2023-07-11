import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the necessary hook from react-router-dom
import LoginForm from './LoginForm'; // Import the LoginForm component
import './CrackChampCompetition.css';

const CrackChampCompetition = () => {
  // State variable to track the login status
  const [loggedIn, setLoggedIn] = useState(false);
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();
// Function to handle the login logic
  const handleLogin = () => {
    // Perform login logic and set loggedIn state to true if successful
    setLoggedIn(true);
    // Use the navigate function to redirect to the competition page
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
