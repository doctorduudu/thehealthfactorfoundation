import React, { Component } from "react";
import MedicalOutreachImg from "../img/medical-outreach.jpg";
import Title from "./common/title";
import * as firebase from "firebase/app";

class Events extends Component {
  state = {
    upcomingEvent: {},
    pastEvents: [],
  };

  componentDidMount() {
    let upcomingEvent = {};
    let pastEvents = [];

    const getUpcomingEvent = firebase
      .firestore()
      .collection("upcomingEvent")
      .doc("upcomingEvent")
      .get()
      .then((doc) => {
        console.log(doc.data());
        upcomingEvent = doc.data();
      })
      .catch((error) => {
        // console.log(error.message);
      });

    const getPastEvents = firebase
      .firestore()
      .collection("pastEvents")
      .orderBy("dateUploaded", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          pastEvents.push(doc.data());
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    Promise.all([getUpcomingEvent, getPastEvents]).then(() => {
      this.setState({ upcomingEvent, pastEvents });
    });
  }

  render() {
    const { upcomingEvent, pastEvents } = this.state;

    return (
      <React.Fragment>
        <section id="events-page">
          <div className="container upcoming-events">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 mx-auto">
                <Title title="Upcoming Event" />
                <a href="/upload-upcoming-event">
                  <button
                    type="button"
                    className="button w-50 rounded btn-outline-danger"
                    aria-label="upcoming event"
                  >
                    Upload upcoming event
                  </button>
                </a>
                <br />
                <br />
                <h4>{upcomingEvent.title}</h4>
                <img
                  className="img img-fluid"
                  src={MedicalOutreachImg}
                  alt="upcoming event"
                />
              </div>
              <div className="col-11 col-md-9 col-lg-8 mx-auto">
                <h4 className="text-capitalize text-danger mt-2">
                  Event Details
                </h4>
                <span className="h5">Date: </span>
                <span>{upcomingEvent.period}</span>
                <br />
                <span className="h5">Location: </span>
                <span>{upcomingEvent.location}</span>
                <br />
                <span className="h5">Summary</span>
                <p>{upcomingEvent.summary}</p>
              </div>
            </div>
            <hr />

            <div className="container past-events">
              <div className="row">
                <div className="col-11 col-lg-6 mx-auto">
                  <Title title="Past Events" />
                  <a href="/upload-past-event">
                    <button
                      type="button"
                      className="button w-50 rounded btn-outline-danger"
                      aria-label="past event"
                    >
                      Upload past event
                    </button>
                  </a>
                  <br />
                  <br />
                </div>
              </div>
              <div className="row">
                {pastEvents.map((event) => {
                  return (
                    <div
                      className="col-11 col-lg-6 mx-auto"
                      key={event.dateUploaded}
                    >
                      <span className="h4">{event.title}</span>
                      <br />
                      <span className="h5">Date: </span>
                      <span>{event.period}</span>
                      <br />
                      <span className="h5">Location: </span>
                      <span>{event.location}</span>
                      <br />
                      <span className="h5">Summary</span>
                      <p>{event.summary}</p>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Events;
