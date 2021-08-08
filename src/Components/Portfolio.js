import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (

        <div key={projects.title} className="columns portfolio-item">
          <h5 style={{ textAlign: "center", color: "#5f6661" }}>{projects.title}</h5>
          <div className="item-wrap">

            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <p>{projects.category}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
                    <a href={projects.demo}>DEMO</a>
                  </div>
                  <div style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
                    <a href={projects.code}>CODE</a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
