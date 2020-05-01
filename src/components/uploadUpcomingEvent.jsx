import React, { Component } from "react";
import Form from "./common/form";
import * as firebase from "firebase/app";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class UploadUpcomingEvent extends Form {
  state = {
    data: {
      title: "",
      period: "",
      location: "",
      summary: "",
      eventImg: "",
    },
    errors: {},
    file: {},
  };

  schema = {
    title: Joi.string().min(15).max(150).required().label("Title"),
    period: Joi.string().max(50).required().label("period"),
    location: Joi.string().min(10).max(100).required().label("Location"),
    summary: Joi.string().min(100).max(400).required().label("Summary"),
    eventImg: Joi.string().required().label("Image"),
  };

  doSubmit = () => {
    const { data } = this.state;

    const title = data.title;
    const period = data.period;
    const location = data.location;
    const summary = data.summary;

    const file = this.state.file;

    const storageRef = firebase.storage().ref("upcomingEvent");
    const task = storageRef.put(file);
    task.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // console.log("FIle available at ", downloadURL);

          this.setState({
            data: {
              title: "",
              period: "",
              location: "",
              summary: "",
              eventImg: "",
            },
          });

          firebase
            .firestore()
            .collection("upcomingEvent")
            .doc("upcomingEvent")
            .set({
              title: title,
              period: period,
              location: location,
              summary: summary,
              eventImg: downloadURL,
            })
            .then(() => {
              toast.success("Event successfully added");
            })
            .catch((error) => {
              //   console.log(error.message);
              toast.error("Sorry! Something went wrong");
            });
        });
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <section id="upload-upcoming-event">
          <div className="container mb-3">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 mx-auto">
                <form onSubmit={this.handleSubmit}>
                  {this.renderTextField("title", "Title")}
                  {this.renderTextField("period", "Date/Period")}
                  {this.renderTextField("location", "Location")}
                  {this.renderTextField("summary", "Summary")}
                  <h5 style={{ margin: "20px" }}>
                    <strong>Event Flyer or Image</strong>
                  </h5>
                  {this.renderFileInput(
                    "eventImg",
                    "Choose an image file:  ",
                    this.state.file
                  )}

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

export default UploadUpcomingEvent;
