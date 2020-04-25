import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import NavBar from "./components/navbar";
import Donate from "./components/donate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/gallery" exact component={Gallery} />

        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
