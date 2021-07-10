function Qualification() {
  return (
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
  );
}

export default Qualification;