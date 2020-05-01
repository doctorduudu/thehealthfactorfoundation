import React, { Component } from "react";
import Form from "./common/form";
import * as firebase from "firebase/app";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class UploadPastEvent extends Form {
  state = {
    data: {
      title: "",
      period: "",
      location: "",
      summary: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().min(15).max(150).required().label("Title"),
    period: Joi.string().max(50).required().label("period"),
    location: Joi.string().min(10).max(100).required().label("Location"),
    summary: Joi.string().min(100).max(400).required().label("Summary"),
  };

  doSubmit = () => {
    const { data } = this.state;

    const title = data.title;
    const period = data.period;
    const location = data.location;
    const summary = data.summary;

    const dateUploaded = Number(Date.now());

    firebase
      .firestore()
      .collection("pastEvents")
      .add({
        title: title,
        period: period,
        location: location,
        summary: summary,
        dateUploaded: dateUploaded,
      })
      .then(() => {
        toast.success("Event successfully added");
        this.setState({
          data: {
            title: "",
            period: "",
            location: "",
            summary: "",
          },
        });
      })
      .catch((error) => {
        //   console.log(error.message);
        toast.error("Sorry! Something went wrong");
      });
  };

  render() {
    return (
      <React.Fragment>
        <section id="upload-past-event">
          <div className="container mb-3">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 mx-auto">
                <form onSubmit={this.handleSubmit}>
                  {this.renderTextField("title", "Title")}
                  {this.renderTextField("period", "Date/Period")}
                  {this.renderTextField("location", "Location")}
                  {this.renderTextField("summary", "Summary")}

                  {this.renderSubmitButton("Submit")}
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default UploadPastEvent;
