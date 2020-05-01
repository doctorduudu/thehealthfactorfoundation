import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as firebase from "firebase/app";
import { toast } from "react-toastify";

class Admin extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().min(10).max(100).required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted details");
    const { data } = this.state;
    const email = data.email;
    const password = data.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(function () {
          window.location = "/home";
        }, 2000);
        toast.success("successfully signed in");
      })
      .catch(function (error) {
        // Handle Errors here.
        toast.error(error.message);
        // ...
      });
  };

  render() {
    return (
      <React.Fragment>
        <section id="admin-page">
          <div className="container">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 mx-auto">
                <form onSubmit={this.handleSubmit}>
                  {this.renderTextField("email", "Email")}
                  {this.renderTextField("password", "Password")}
                  {this.renderSubmitButton("Sign In")}
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Admin;
