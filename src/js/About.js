import marca from '../img/marca.png';
import cv from '../assets/hojadevida.pdf';

function About() {
  return (
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
  );
}

export default About;