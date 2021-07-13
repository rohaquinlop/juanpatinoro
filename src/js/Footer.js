function Footer() {
  return (
    <footer className="footer">
      <div className="footerBg">
        <div className="footerContainer container grid">
          <div>
            <h1 className="footerTitle">Juan</h1>
            <span className="footerSubtitle">Diseñador e ilustrador</span>
          </div>

          <ul className="footerLinks">
            <li>
              <a href="#services" className="footerLink">Servicios</a>
            </li>
            <li>
              <a href="#portfolio" className="footerLink">Portafolio</a>
            </li>
            <li>
              <a href="#contact" className="footerLink">Contáctame</a>
            </li>
          </ul>

          <div className="footerSocials">
            <a href="https://www.instagram.com/juanpatinoro/" className="footerSocial" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>

        <p className="footerCopy">&#169; juanpatinoro. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;