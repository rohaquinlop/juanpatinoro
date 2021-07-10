function Skills() {
  return (
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
  )
}

export default Skills;