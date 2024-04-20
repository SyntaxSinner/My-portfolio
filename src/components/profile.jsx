import React from 'react';
import "../styles/styles.css"; // Import CSS styles

import profileImage from '../assets/jawhar1.jpeg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resume from '../assets/Resume_Jawhar_Djebbi.pdf'

function ProfileSection() {
  const handleCVDownload = () => {
    window.open(resume);
  };

  const handleContactInfo = () => {
    // Assuming location.href is used for routing within your app
    // Replace with your routing logic or use a library like React Router
    window.location.href = './#contact';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/jawhar-djebbi/');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/SyntaxSinner');
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img 
          src={profileImage}
          alt="Jawhar Djebbi profile picture" 
          className="profile-image" // Add class for styling
        />
      </div>
      <div className="section__text">
      <p className="section__text__p1">Passionate Software Engineer and AI Enthusiast</p>
<h1 className="title">Jawhar Djebbi</h1>
<p className="section__text__p2">Exploring the Boundaries of AI and System Design</p>
<p className="additional-text">
Welcome to my engineering realm! Explore my passion for innovation and technology. Let's dive into my projects together!
</p>

        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleCVDownload}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedInClick}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={handleGithubClick}
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
