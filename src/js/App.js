//import logo from '../img/logo.svg';
import profilePicture from '../img/profile.png';
import marca from '../img/marca.png';
import cv from '../assets/hojadevida.pdf';
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
          <span className="sectionSubtitle">Introducción</span>

          <div className="aboutContainer container grid">
            <img src={marca} alt="" className="aboutImg" />
            <div className="aboutData">
              <p className="aboutDescription">Diseñador e ilustrador, con conocimiento amplio y experiencia en creación de marca. </p>

              <div className="aboutInfo">

                <div>
                  <span className="aboutInfo-title">01+</span>
                  <span className="aboutInfo-name"> Años <br /> experiencia</span>
                </div>

                <div>
                  <span className="aboutInfo-title">20+</span>
                  <span className="aboutInfo-name"> Completados <br /> proyectos</span>
                </div>

              </div>

              <div className="aboutButtons">
                <a download="" href={cv} className="button button--flex">
                  Descargar hoja de vida<i className="uil uil-download-alt buttonIcon"></i>
                </a>
              </div>

            </div>
          </div>
        </section>

        {
          //Skills
        }
        <section className="skills section" id="skills">
          <h2 className="sectionTitle">Habilidades</h2>
          <span className="sectionSubtitle">Mi nivel técnico</span>

          <div className="skillsContainer container grid">
            <div>
              {
                //Skill 1
              }
              <div className="skillsContent skillsOpen">
                <div className="skillsHeader">
                  <i className="uil uil-palette skillsIcon"></i>
                  <div>
                    <h1 className="skillsTitle">Ilustrador</h1>
                    <span className="skillsSubtitle">Mas de 4 años</span>
                  </div>

                  <i className="uil uil-angle-down skillsArrow"></i>
                </div>

                <div className="skillsList grid">

                  <div className="skillsData">
                    <div className="skillsTitle">
                      <h3 className="skillsName">Photoshop</h3>
                      <span className="skillsNumber">80%</span>
                    </div>
                    <div className="skillsBar">
                      <span className="skillsPercentage skillsPhotoshop"></span>
                    </div>
                  </div>

                  <div className="skillsData">
                    <div className="skillsTitle">
                      <h3 className="skillsName">Procreate</h3>
                      <span className="skillsNumber">80%</span>
                    </div>
                    <div className="skillsBar">
                      <span className="skillsPercentage skillsProcreate"></span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div>
              {
                //Skill 2
              }
              <div className="skillsContent skillsClose">
                <div className="skillsHeader">
                  <i className="uil uil-swatchbook skillsIcon"></i>
                  <div>
                    <h1 className="skillsTitle">Diseñador</h1>
                    <span className="skillsSubtitle">Mas de 3 años</span>
                  </div>

                  <i className="uil uil-angle-down skillsArrow"></i>
                </div>

                <div className="skillsList grid">

                  <div className="skillsData">
                    <div className="skillsTitle">
                      <h3 className="skillsName">Illustrator</h3>
                      <span className="skillsNumber">80%</span>
                    </div>
                    <div className="skillsBar">
                      <span className="skillsPercentage skillsIllustrator"></span>
                    </div>
                  </div>

                  <div className="skillsData">
                    <div className="skillsTitle">
                      <h3 className="skillsName">InDesign</h3>
                      <span className="skillsNumber">60%</span>
                    </div>
                    <div className="skillsBar">
                      <span className="skillsPercentage skillsIndesign"></span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {
          //About
        }

        <section className="qualification section">
          <h2 className="sectionTitle">Formación</h2>
          <span className="sectionSubtitle">Mi recorrido personal</span>

          <div className="qualificationContainer container">
            <div className="qualificationTabs">
              {
                //No tiene experiencia entonces no se agrega la experiencia de trabajo
              }
              <div className="qualificationButton button--flex qualificationActive" data-target="#education">
                <i className="uil uil-graduation-cap qualificationIcon"></i>
                Educación
              </div>
            </div>

            <div className="qualificationSections">
              {
                //Informacion sobre educacion
              }
              <div className="qualificationContent qualificationActive" data-content id="education">
                {
                  //Educacion 1
                }
                <div className="qualificationData">
                  <div>
                    <h3 className="qualificationTitle">Bachiller</h3>
                    <span className="qualificationSubtitle">Colombia - Institución Educativa Cárdenas Centro</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2017
                    </div>
                  </div>

                  <div>
                    <span className="qualificationRounder"></span>
                    <span className="qualificationLine"></span>
                  </div>
                </div>

                {
                  //Educacion 2
                }
                <div className="qualificationData">
                  <div></div>
                  <div>
                    <span className="qualificationRounder"></span>
                    {
                      //<span className="qualificationLine"></span>
                    }
                  </div>

                  <div>
                    <h3 className="qualificationTitle">Diseño de Comunicación Visual</h3>
                    <span className="qualificationSubtitle">Colombia - Pontificia Universidad Javeriana Cali</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2018 - 2022
                    </div>
                  </div>

                </div>


              </div>
            </div>

          </div>
        </section>

        {
          //Services
        }
        <section className="services section" id="services">
          <h2 className="sectionTitle">Servicios</h2>
          <span className="sectionSubtitle">¿Qué ofrezco?</span>

          <div className="servicesContainer container grid">
            {
              //Servicio 1
            }
            <div className="servicesContent">
              <div>
                <i className="uil uil-ruler"></i>
                <h3 className="servicesTitle">Branding</h3>
              </div>

              <span className="button button--flex button--small button--link servicesButton">
                Leer más
                <i className="uil uil-arrow-right buttonIcon"></i>
              </span>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
