import './About.css';
import React from 'react';
import dee_johann from '../../images/dee_johann.png';
import hochworter_ann from '../../images/hochworter_ann.jpg';

function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-member">
        <img src={dee_johann} className='about-us-picture'/>
        <h2>Johann Dee</h2>
        <div className="bio-container">
          <p className='bio-text'>
            Johann is currently a Turing student with a background in both aviation and construction. Driven by a passion for detail and continuous learning, he transitioned into tech through Turing's Front-End Engineering program. Johann aims to channel his expanding tech skills into impactful projects and hopes to pursue engineering roles that leverage his expertise.
          </p> 
          <p className='bio-text'>
            Outside of coding, he finds joy in playing tennis and exploring new dining experiences.
          </p>
        </div>
      </div>

      <div className="about-us-member">
      <img src={hochworter_ann} className='about-us-picture'/>
        <h2>Ann Hochworter</h2>
        <div className="bio-container">
          <p className='bio-text'>
            Ann is a software developer in the midst of an enriching journey at
            Turing School of Software & Design. This experience has solidified her
            skills in JavaScript, HTML, and CSS, and she has wholeheartedly embraced
            the path of lifelong learning that a career in software development
            entails.
          </p>
          <p className='bio-text'>
            As she reaches the halfway point in her Turing journey, Ann is 
            excited to venture into the world of React, Router, and Cypress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
