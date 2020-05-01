import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import NavBar from "./components/navbar";
import Donate from "./components/donate";
import Events from "./components/events";
import Contact from "./components/contact";
import Admin from "./components/admin";
import { ToastContainer } from "react-toastify";
import UploadUpcomingEvent from "./components/uploadUpcomingEvent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import UploadPastEvent from "./components/uploadPastEvent";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer position="top-center" newestOnTop />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/events" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/admin" exact component={Admin} />
        <Route
          path="/upload-upcoming-event"
          exact
          component={UploadUpcomingEvent}
        />
        <Route path="/upload-past-event" exact component={UploadPastEvent} />

        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
