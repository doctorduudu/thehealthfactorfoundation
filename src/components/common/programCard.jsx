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
      <div class="card shadow my-3">
        <img
          class="card-img-top"
          loading="lazy"
          src={imgSrc}
          alt={title}
          height="300px"
        />
        <div class="card-body" style={{ minHeight: "300px" }}>
          <h4 class="card-title text-danger text-capitalize">{title}</h4>
          <hr />
          <p class="card-text">{`${summary.substring(0, 251)}...`}</p>
          <a href={url}>
            <button
              type="button"
              class="button btn-block rounded btn-outline-danger"
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
