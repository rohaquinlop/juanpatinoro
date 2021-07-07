//import logo from '../img/logo.svg';
import profilePicture from '../img/profile.png';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      {/*
      <img src={profilePicture}></img>
      */}
      <header className="header" id="header">
        {
          //Navbar
        }
        <nav className="nav container">
          <a href="#" className="navLogo">
            Juan
          </a>

          <div className="navMenu" id="nav-menu">
            <ul className="navList grid">
              <li className="navItem">
                <a href="#home" className="navLink">
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
            <div className="navToggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        {
          //Home
        }
        <section className="home section" id="home">
          <div className="homeContainer container grid">
            <div className="homeContent grid">
              <div className="homeSocial">
                <a href="" target="_blank" className="homeSocial-icon">
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://www.instagram.com/juanpatinoro/"
                  target="_blank"
                  className="homeSocial-icon"
                >
                  <i className="uil uil-instagram"></i>
                </a>

                <a href="https://www.behance.net/juandapatio" target="_blank" className="homeSocial-icon">
                  <i className="uil uil-behance-alt"></i>
                </a>
              </div>

              <div className="homeImg">
                <svg className="homeBlob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image className="homeBlob-img" x='10' y='50' xlinkHref={profilePicture} />
                  </g>
                </svg>
              </div>

              <div className="homeData">
                <h1 className="homeTitle">Hola, soy Juan</h1>
                <h3 className="homeSubtitle">Diseñador e ilustrador</h3>
                <p className="homeDescription">Apasionado por crear historias y personajes por medio de la ilustración.</p>
                <a href="#contact" className="button button--flex">
                  Contáctame <i className="uil uil-message buttonIcon"></i>
                </a>
              </div>
            </div>

            <div className="homeScroll">
              <a href="#about" className="homeScroll-button button--flex">
                <i className="uil uil-mouse-alt homeScroll-mouse"></i>
                <span className="homeScroll-name">Bajar</span>
                <i className="uil uil-arrow-down homeScroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        {
          //About
        }
        <section className="about section" id="about">
          <h2 className="sectionTitle">Sobre mí</h2>
          <span className="sectionSubtitle">Mi introducción</span>

          <div className="aboutContainer container grid">
            {
              //<img src="" alt="" className="aboutImg" />
            }
            <div className="aboutData">
              <p className="aboutDescription"></p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
