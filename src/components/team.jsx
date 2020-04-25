import React, { Component } from "react";

class Team extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section id="our-team">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1 className="text-capitalize mb-1 mt-4 text-danger">
                  <strong>our team</strong>
                </h1>
                <div className="title-underline bg-danger mx-auto"></div>
                <p className="text-capitalize text-muted mt-2">
                  we are the very best there is{" "}
                </p>
              </div>
            </div>
            <div className="row" id="our-team">
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="patron"
                />
                <h3 className="text-center my-2 text-danger">Patron</h3>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="president"
                />
                <h3 className="text-center my-2 text-danger">President </h3>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="general secretary"
                />
                <h3 className="text-center my-2 text-danger">
                  General Secretary
                </h3>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="financial secretary"
                />
                <h3 className="text-center m-2 text-danger">
                  Financial Secretary
                </h3>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="organizer"
                />
                <h3 className="text-center my-2 text-danger">Organizer</h3>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <img
                  className="img img-fluid"
                  loading="lazy"
                  src={HealthAdvocacyImg}
                  alt="projects officer"
                />
                <h3 className="text-center my-2 text-danger">
                  Projects Officer
                </h3>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Team;
