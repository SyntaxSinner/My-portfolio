import "../styles/styles.css";

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

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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
      <nav id="hamburger-nav">
        <div className="logo">Jawhar Djebbi</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <ul>
            <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
