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
          Johann Dee, currently a Turing student, brings a background rooted in aviation and construction to the tech industry. Driven by a passion for detail and continuous learning, he transitioned into tech through Turing's Front-End Engineering program. Johann aims to channel his expanding tech skills into impactful projects and hopes to pursue engineering roles that leverage his expertise. Outside of coding, he finds joy in playing tennis and exploring new dining experiences.
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
