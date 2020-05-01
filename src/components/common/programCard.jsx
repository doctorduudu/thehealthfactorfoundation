import React, { Component } from "react";

class ProgramCard extends Component {
  state = {
    imgSrc: this.props.imgSrc,
    title: this.props.title,
    summary: this.props.summary,
    url: this.props.url,
  };
  render() {
    const { imgSrc, title, summary, url } = this.state;

    return (
      <div className="card shadow my-3">
        <img className="card-img-top" loading="lazy" src={imgSrc} alt={title} />
        <div className="card-body" style={{ minHeight: "300px" }}>
          <h4 className="card-title text-danger text-capitalize">{title}</h4>
          <hr />
          <p className="card-text">{`${summary.substring(0, 251)}...`}</p>
          <a href={url}>
            <button
              type="button"
              className="button btn-block rounded btn-outline-danger"
              aria-label="Continue Reading"
            >
              Continue Reading
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProgramCard;
