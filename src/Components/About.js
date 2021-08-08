import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var city = data.address.city;
    var state = data.address.state;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <section id="about">
      <div className="row">
        <div className="nine columns main-col">
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city}, {state}
                </span>
                <br/>
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  Resume
                </a>
                <ul>{networks}</ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
