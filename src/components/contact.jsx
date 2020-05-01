import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section id="contact-page">
          <div className="container mt-3">
            <div className="row email">
              <div className="col-2 mx-auto">
                <i className="far fa-envelope h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>contact@thehealthfactor.com</span>
              </div>
            </div>
            <hr />
            <div className="row mobile">
              <div className="col-2 mx-auto">
                <i className="fas fa-phone h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>(00233)546568976</span>
              </div>
            </div>
            <hr />
            <div className="row facebook">
              <div className="col-2 mx-auto">
                <i className="fab fa-facebook-square h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>thehealthfactor</span>
              </div>
            </div>
            <hr />
            <div className="row twitter">
              <div className="col-2 mx-auto">
                <i className="fab fa-twitter-square h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>(00233)546568976</span>
              </div>
            </div>
            <hr />
            <div className="row youtube">
              <div className="col-2 mx-auto">
                <i className="fab fa-youtube-square h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>(00233)546568976</span>
              </div>
            </div>
            <hr />
            <div className="row instagram">
              <div className="col-2 mx-auto">
                <i className="fab fa-instagram h2"></i>
              </div>
              <div className="col-8 mx-auto">
                <span>(00233)546568976</span>
              </div>
            </div>
            <hr />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
