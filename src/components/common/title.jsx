import React, { Component } from "react";

class Title extends Component {
  state = {
    title: this.props.title,
  };
  render() {
    const { title } = this.props;
    return (
      <div className="row">
        <div className="col text-center">
          <h1 className="text-capitalize mb-1 mt-4 text-danger">
            <strong>{title}</strong>
          </h1>
          <div className="title-underline bg-danger mx-auto"></div>
          <p className="text-capitalize text-muted mt-2">
            the health of the aged... our priority
          </p>
        </div>
      </div>
    );
  }
}

export default Title;
