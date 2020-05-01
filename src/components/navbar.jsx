import React, { Component } from "react";
import * as firebase from "firebase/app";
import { toast } from "react-toastify";

class NavBar extends Component {
  state = {
    signedIn: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        this.setState({ signedIn: true });
        // ...
      } else {
        // User is signed out.
        this.setState({ signedIn: false });
        // console.log("user is signed out");
        // ...
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        setTimeout(function () {
          window.location = "/home";
        }, 2000);
        localStorage.setItem("currentUser", JSON.stringify({}));
        toast.success("Goodbye!");
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  render() {
    const { signedIn } = this.state;
    return (
      <React.Fragment>
        <nav
          className="navbar  navbar-dark navbar-expand-md py-1 bg-danger d-flex"
          id="navigation"
        >
          <a href="/home" className="navbar-brand text-capitalize h2">
            the health factor Foundation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarLinks"
            aria-label="menu dropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarLinks"
          >
            <ul className="navbar-nav text-capitalize">
              <li className="nav-item h4 active">
                <a href="/home" className="nav-link text">
                  home
                </a>
              </li>
              <li className="nav-item h4">
                <a href="/about" className="nav-link">
                  about
                </a>
              </li>
              <li className="nav-item h4">
                <a href="/events" className="nav-link">
                  events
                </a>
              </li>
              <li className="nav-item h4">
                <a href="/contact" className="nav-link">
                  contact
                </a>
              </li>
              {signedIn && (
                <li className="nav-item h4">
                  <span className="btn nav-link" onClick={this.signOutUser}>
                    Sign Out
                  </span>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
