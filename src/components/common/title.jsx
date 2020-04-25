import React, { Component } from "react";

class Title extends Component {
  state = {
    title: this.props.title,
  };
  render() {
    const { title } = this.props;
    return (
      <div class="row">
        <div class="col text-center">
          <h1 class="text-capitalize mb-1 mt-4 text-danger">
            <strong>{title}</strong>
          </h1>
          <div class="title-underline bg-danger mx-auto"></div>
          <p class="text-capitalize text-muted mt-2">
            the health of the Aged, our priority
          </p>
        </div>
      </div>
    );
  }
}

export default Title;
