import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div>
      <h1 className="home-text"><b>WORKING TOWARDS INNOVATION</b></h1>
      {/* Rest of the content for the home page */}
      <div className="footer-container">
        <p>
          MHTECHIN is an exceptional firm that offers software development, embedded development, and educational development services. Our main goal is to provide our clients with the finest solutions that are tailored to meet their unique requirements. Our squad of specialists concentrates on innovation and quality in developing sturdy software applications, designing embedded systems, and generating educational materials to help individuals and corporations progress.
        </p>
        <p>&copy; 2023 MHTECHIN. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
