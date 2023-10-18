import './About.css';
import React from 'react';
// import johann from './src/data/images';
// import ann from './src/data/images';

function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-johann">
        <h2>Johann Dee</h2>
        {/* <img src={johann} alt="Johann Dee" /> */}
        <p className="bio">
          I'm a passionate software developer with a strong focus on front-end
          technologies, including JavaScript, HTML, CSS, and React. My unique
          background in construction and aviation provides a fresh perspective
          to my work. I'm driven by a genuine love for problem-solving and a
          desire to make meaningful contributions to the industry. I actively
          seek opportunities for collaboration, innovation, and the creation of
          exciting projects.
        </p>
      </div>
      <div className="about-us-ann">
        <h2>Ann Hochworter</h2>
        {/* <img src={ann} alt="Ann Hochworter" /> */}
        <p className="bio">
          I'm a software developer in the midst of an enriching journey at
          Turing School of Software & Design. This experience has solidified my
          skills in JavaScript, HTML, and CSS, and I've wholeheartedly embraced
          the path of lifelong learning that a career in software development
          entails. As we reach the halfway point in the Turing journey, I'm
          excited to venture into the world of React, Router, and Cypress. It is
          our pleasure to present to you our first React portfolio project.
        </p>
      </div>
    </div>
  );
}

export default About;
