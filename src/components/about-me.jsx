import React from 'react';
import "../styles/styles.css"; // Import CSS styles

function AboutSection() {

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="src/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1 year at Octomiro as a Backend AI Engineer</p>
            </div>
            <div className="details-container">
              <img
                src="src/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>5 years Engineering Degree in Intelligent Systems (2020 - 2025)</p>
              <p>
                I studied at INSAT (National Institute of Applied Science and Technology), which is an engineering school accessible only to top-ranked students in the national entrance exam.
                The curriculum at INSAT offers multidisciplinary training, covering areas such as mathematics, signals and systems, computer science, artificial intelligence, embedded systems, as well as management, finance, and economics.
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
            As an aspiring software engineer, I am deeply intrigued by disciplines such as system design, particularly when it involves integrating AI microservices. 
            My passion lies in building scalable systems that not only leverage cutting-edge technology but also empower businesses to thrive and grow in today's dynamic landscape. 
            Beyond my professional pursuits, I am also a dedicated tennis practitioner, finding joy and relaxation on the court while hitting ground strokes and a <br></br>
            I am committed to continuous learning and growth, both in my career and personal endeavors.
            </p>
          </div>
        </div>
      </div>
      <img
        src="src/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => smoothScroll("projects")} // Use an arrow function here
      />

    </section>
  );
}

export default AboutSection;
