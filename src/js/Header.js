function Header() {
  return (
    <header className="header" id="header">
      {
        //Navbar
      }
      <nav className="nav container">
        <a href="#home" className="navLogo">
          Juan
        </a>

        <div className="navMenu" id="nav-menu">
          <ul className="navList grid">
            <li className="navItem">
              <a href="#home" className="navLink activeLink">
                <i className="uil uil-estate navIcon"></i> Inicio
              </a>
            </li>
            <li className="navItem">
              <a href="#about" className="navLink">
                <i className="uil uil-user navIcon"></i> Sobre mí
              </a>
            </li>
            <li className="navItem">
              <a href="#skills" className="navLink">
                <i className="uil uil-file-alt navIcon"></i> Habilidades
              </a>
            </li>
            <li className="navItem">
              <a href="#services" className="navLink">
                <i className="uil uil-briefcase-alt navIcon"></i> Servicios
              </a>
            </li>
            <li className="navItem">
              <a href="#portfolio" className="navLink">
                <i className="uil uil-scenery navIcon"></i> Portafolio
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">
                <i className="uil uil-message navIcon"></i> Contáctame
              </a>
            </li>
          </ul>
          <i className="uil uil-times navClose" id="nav-close"></i>
        </div>

        <div className="navBtns">
          {
            //Boton para cambiar el tema de la pagina
          }
          <i className="uil uil-moon changeTheme" id="themeButton"></i>

          <div className="navToggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;