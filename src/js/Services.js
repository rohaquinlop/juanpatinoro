function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="sectionTitle">Servicios</h2>
      <span className="sectionSubtitle">¿Qué ofrezco?</span>

      <div className="servicesContainer container grid">
        {
          //Servicio 1
        }
        <div className="servicesContent">
          <div>
            <i className="uil uil-lightbulb-alt servicesIcon"></i>
            <h3 className="servicesTitle">Branding</h3>
          </div>

          <span className="button button--flex button--small button--link servicesButton">
            Leer más
            <i className="uil uil-arrow-right buttonIcon"></i>
          </span>

          <div className="servicesModal">
            <div className="servicesModal-content">
              <h4 className="servicesModal-title">Branding</h4>
              <i className="uil uil-times servicesModal-close"></i>

              <ul className="servicesModal-services grid">
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>ADN de Marca</p>
                </li>
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Identidad Textual</p>
                </li>
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Despliegue de Marca</p>
                </li>
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Lineamientos de Marca</p>
                </li>
              </ul>

            </div>
          </div>

        </div>
        {
          //Servicio 2
        }
        <div className="servicesContent">
          <div>
            <i className="uil uil-edit-alt servicesIcon"></i>
            <h3 className="servicesTitle">Ilustración</h3>
          </div>

          <span className="button button--flex button--small button--link servicesButton">
            Leer más
            <i className="uil uil-arrow-right buttonIcon"></i>
          </span>

          <div className="servicesModal">
            <div className="servicesModal-content">
              <h4 className="servicesModal-title">Ilustración</h4>
              <i className="uil uil-times servicesModal-close"></i>

              <ul className="servicesModal-services grid">
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Creación de Conceptos</p>
                </li>
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Creación de Universos Visuales</p>
                </li>
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p>Creación de Personajes</p>
                </li>
              </ul>

            </div>
          </div>

        </div>


      </div>
    </section>
  );
}

export default Services;