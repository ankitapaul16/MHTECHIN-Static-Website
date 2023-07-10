import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from './assets/mht.png';
import Home from './components/Home';
import './assets/background.png';
import C from './components/C';
import Cpp from './components/Cpp';
import Python from './components/Python';
import Javascript from './components/Javascript';
import Java from './components/Java';
import PHP from './components/PHP';
import Dashboard from './components/Dashboard';
import './components/dashboard.css';
import './components/navbar.css';
import Codeboard from './components/Codeboard';
import CrackChampCompetition from './components/CrackChamp Competition';
import CrackChampLeaderboard from './components/CrackChamp Leaderboard';
import SignupForm from './components/SignupForm';
import CompetitionPage from './components/CompetitionPage';

//Dropdown function
const App = () => {
  // State variables for dropdowns
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  useEffect(() => {
    // Closes dropdown when clicked outside
    const handleOutsideClick = (event) => {
      if (
        event.target.closest('.dropdown-1') === null &&
        event.target.closest('.dropdown-2') === null
      ) {
        setDropdownOpen1(false);
        setDropdownOpen2(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const handleOptionClick1 = () => { 
    setDropdownOpen1(false);  // Reset dropdown state after option click
  };

  const handleOptionClick2 = () => {
    setDropdownOpen2(false);  // Reset dropdown state after option click
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <NavLink exact to="/" className="navbar-brand" style={{ marginRight: '20px', marginLeft: '20px' }}>
          <img src={logo} alt="Logo" width="130px" />
        </NavLink>
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" style={{ marginLeft: '20px' }}>
                Home
              </NavLink>
            </li>
            {/* Tutorials Dropdown */}
            <li className="nav-item dropdown dropdown-1">
              <button
                className="nav-link dropdown-toggle btn"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen1}
                onClick={toggleDropdown1}
                style={{ marginLeft: '15px' }}
              >
                Tutorials
              </button>
              <div className={`dropdown-menu ${isDropdownOpen1 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <NavLink to="/C" className="dropdown-item" onClick={handleOptionClick1}>
                  C
                </NavLink>
                <NavLink to="/C++" className="dropdown-item" onClick={handleOptionClick1}>
                  C++
                </NavLink>
                <NavLink to="/Python" className="dropdown-item" onClick={handleOptionClick1}>
                  Python
                </NavLink>
                <NavLink to="/Javascript" className="dropdown-item" onClick={handleOptionClick1}>
                  Javascript
                </NavLink>
                <NavLink to="/Java" className="dropdown-item" onClick={handleOptionClick1}>
                  Java
                </NavLink>
                <NavLink to="/PHP" className="dropdown-item" onClick={handleOptionClick1}>
                  PHP
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/EmbeddedSystems" className="dropdown-item" onClick={handleOptionClick1}>
                  Embedded Systems
                </NavLink>
              </div>
            </li>
             {/* CodeBoard */}
            <li className="nav-item">
              <NavLink exact to="/Codeboard" className="nav-link" activeClassName="active" style={{ marginLeft: '15px' }}>
                CodeBoard
              </NavLink>
            </li>
            {/* CrackChamp Dropdown */}
            <li className="nav-item dropdown dropdown-2">
              <button
                className="nav-link dropdown-toggle btn"
                id="navbarDropdownCrackChamp"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen2}
                onClick={toggleDropdown2}
                style={{ marginLeft: '15px' }}
              >
                CrackChamp
              </button>
              <div className={`dropdown-menu ${isDropdownOpen2 ? 'show' : ''}`} aria-labelledby="navbarDropdownCrackChamp">
                <NavLink to="/crackchamp/competition" className="dropdown-item" onClick={handleOptionClick2}>
                  Competition
                </NavLink>
                <NavLink to="/crackchamp/leaderboard" className="dropdown-item" onClick={handleOptionClick2}>
                  Leaderboard
                </NavLink>
              </div>
            </li>
          </ul>
           {/* Search Form */}
          <form className="d-flex" role="search" background-color="blue">
            <div className="input-group">
              <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" background-color="blue" />
              <button className="btn btn-outline-success" type="submit" style={{ marginRight: '20px' }} >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
       {/* Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/C" element={<C />} />
          <Route path="/C++" element={<Cpp />} />
          <Route path="/Python" element={<Python />} />
          <Route path="/Javascript" element={<Javascript />} />
          <Route path="/Java" element={<Java />} />
          <Route path="/PHP" element={<PHP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/codeboard" element={<Codeboard />} />
          <Route path="/crackchamp/competition" element={<CrackChampCompetition />} />
          <Route path="/crackchamp/leaderboard" element={<CrackChampLeaderboard />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/competition" element={<CompetitionPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;




