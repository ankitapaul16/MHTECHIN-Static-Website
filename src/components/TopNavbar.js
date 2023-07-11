import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Navigation links for different programming languages */}
        <li><Link to="/c++">C++</Link></li>
        <li><Link to="/c">C</Link></li>
        <li><Link to="/python">Python</Link></li>
        <li><Link to="/javascript">Javascript</Link></li>
        <li><Link to="/java">Java</Link></li>
        <li><Link to="/php">PHP</Link></li>
        <li><Link to="/html">HTML</Link></li>
        <li><Link to="/css">CSS</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


