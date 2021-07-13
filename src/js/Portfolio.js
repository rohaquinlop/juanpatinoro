import portfolio1 from '../assets/portfolio/portfolio1.jpg';
import portfolio2 from '../assets/portfolio/portfolio2.jpg';
import portfolio3 from '../assets/portfolio/portfolio3.jpg';

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="sectionTitle">Portafolio</h2>
      <span className="sectionSubtitle">Trabajos recientes</span>

      <div className="portfolioContainer container swiper-container">
        <div className="swiper-wrapper">
          {
            //Trabajo 1
          }
          <div className="portfolioContent grid swiper-slide">
            <img src={portfolio1} className="portfolioImg" alt="" />
            <div className="portfolioData">
              <h3 className="portfolioTitle">Escarabajo</h3>
              <p className="portfolioDescription">Ilustración inspirada del ciclismo colombiano en tributo a mi amado padre. Hecho en Photoshop.</p>
              <a href="https://www.instagram.com/p/COE-CvthoMW/" className="button button--flex button--small portfolioButton" target="_blank" rel="noreferrer">
                Ver en Instagram
                <i className="uil uil-arrow-right buttonIcon"></i>
              </a>
            </div>
          </div>

          {
            //Trabajo 2
          }
          <div className="portfolioContent grid swiper-slide">
            <img src={portfolio2} className="portfolioImg" alt="" />
            <div className="portfolioData">
              <h3 className="portfolioTitle">Cara a cara</h3>
              <p className="portfolioDescription">Ilustración hecha en procreate explorando estilos.</p>
              <a href="https://www.instagram.com/p/CMaJj4mhAMk/" className="button button--flex button--small portfolioButton" target="_blank" rel="noreferrer">
                Ver en Instagram
                <i className="uil uil-arrow-right buttonIcon"></i>
              </a>
            </div>
          </div>

          {
            //Trabajo 3
          }
          <div className="portfolioContent grid swiper-slide">
            <img src={portfolio3} className="portfolioImg" alt="" />
            <div className="portfolioData">
              <h3 className="portfolioTitle">Happiness</h3>
              <p className="portfolioDescription">Ilustración hecha a mano por medio de mi técnica favorita.</p>
              <a href="https://www.instagram.com/p/B7rLawHhABH/" className="button button--flex button--small portfolioButton" target="_blank" rel="noreferrer">
                Ver en Instagram
                <i className="uil uil-arrow-right buttonIcon"></i>
              </a>
            </div>
          </div>

        </div>
        {
          //Botones de navegacion
        }
        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiperPortfolioIcon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiperPortfolioIcon"></i>
        </div>

        <div className="swiper-pagination"></div>

      </div>
    </section>
  );
}

export default Portfolio;