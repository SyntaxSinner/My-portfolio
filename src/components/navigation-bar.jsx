import React from 'react';

function NavigationBar() {
  const title = "My Portfolio";

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = (e, targetId) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    smoothScroll(targetId);
  };

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const isOpen = menu.classList.contains("open");
  
    if (!isOpen) {
      menu.classList.add("open");
      icon.classList.add("open");
      // Disable scrolling when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("open");
      icon.classList.remove("open");
      // Enable scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }
  }
  
  
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Jawhar Djebbi</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
