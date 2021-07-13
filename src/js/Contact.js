function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="sectionTitle">Contáctame</h2>
      <span className="sectionSubtitle">Ponte en contacto</span>

      <div className="contactContainer container grid">
        <div>
          {
            //Contacto 1
          }
          <div className="contactInformation">
            <i className="uil uil-phone contactIcon"></i>

            <div>
              <h3 className="contactTitle">Llámame</h3>
              <span className="contactSubtitle">+57 350 7679838</span>
            </div>
          </div>

          {
            //Contacto 2
          }
          <div className="contactInformation">
            <i className="uil uil-envelope contactIcon"></i>

            <div>
              <h3 className="contactTitle">Email</h3>
              <span className="contactSubtitle">juanup135@gmail.com</span>
            </div>
          </div>

          {
            //Contacto 3
          }
          <div className="contactInformation">
            <i className="uil uil-map-marker contactIcon"></i>

            <div>
              <h3 className="contactTitle">Ubicación</h3>
              <span className="contactSubtitle">Colombia - Palmira</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;