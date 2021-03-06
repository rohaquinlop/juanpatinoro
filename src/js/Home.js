import profilePicture from '../img/profile.png';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="homeContainer container grid">
        <div className="homeContent grid">
          <div className="homeSocial">
            {
              /*
            <a href="" target="_blank" className="homeSocial-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
              */
            }

            <a
              href="https://www.instagram.com/juanpatinoro/"
              target="_blank" rel="noreferrer"
              className="homeSocial-icon"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.behance.net/juandapatio" target="_blank" rel="noreferrer" className="homeSocial-icon">
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
                <image className="homeBlob-img" x='-45' y='0' xlinkHref={profilePicture} />
              </g>
            </svg>
          </div>

          <div className="homeData">
            <h1 className="homeTitle">Hola, soy Juan</h1>
            <h3 className="homeSubtitle">Dise??ador e ilustrador</h3>
            <p className="homeDescription">Apasionado por crear historias y personajes por medio de la ilustraci??n.</p>
            <a href="#contact" className="button button--flex">
              Cont??ctame <i className="uil uil-message buttonIcon"></i>
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
  );
}

export default Home;