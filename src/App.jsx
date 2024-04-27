import React, { useEffect, useRef } from 'react';
import NavigationBar from './components/navigation-bar';
import SwipeableTextMobileStepper from './components/carousel';
import ProfileSection from './components/profile';
import AboutSection from './components/about-me';
import ContactSection from './components/contact';
import NET from 'vanta/dist/vanta.net.min';

import arrowIcon from './assets/arrow.png';

function App() {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const vantaRef = useRef(null);  

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      color: 0x000000, // Black color for the net
      backgroundColor: 0xffffff, // White background color
      points: 4, // Adjust the number of points in the net
      maxDistance: 10, // Adjust the maximum distance between points
      spacing: 10, // Adjust the spacing between points
      showDots: true, // Show dots at the intersections of the net
      xOffset: 0.25, // Adjust the horizontal offset of the net 
      yOffset: 0.25, // Adjust the vertical offset of the net
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <div id="vanta" ref={vantaRef}>
        <NavigationBar />
        <ProfileSection />
        <AboutSection />
        <section id="projects">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container color-container">
                <div className="article-container">
                  <SwipeableTextMobileStepper />
                </div>
              </div>
            </div>
          </div>
          <img
  src={arrowIcon}
  alt="Arrow icon"
  className="icon arrow"
  onClick={() => smoothScroll("contact")} 
/>
        </section>
        <ContactSection />
        <footer>
          <p>Copyright &#169; 2024 Jawhar Djebbi. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
