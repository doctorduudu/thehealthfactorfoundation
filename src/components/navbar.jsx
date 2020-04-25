import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          class="navbar  navbar-dark navbar-expand-md py-1 bg-danger d-flex"
          id="navigation"
        >
          <a href="/home" class="navbar-brand text-capitalize h2">
            the health factor
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarLinks"
            aria-label="menu dropdown"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarLinks"
          >
            <ul class="navbar-nav text-capitalize">
              <li class="nav-item h4 active">
                <a href="/home" class="nav-link text">
                  home
                </a>
              </li>
              <li class="nav-item h4">
                <a href="/about" class="nav-link">
                  about
                </a>
              </li>
              <li class="nav-item h4">
                <a href="#events" class="nav-link">
                  events
                </a>
              </li>
              <li class="nav-item h4">
                <a href="#contact" class="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
