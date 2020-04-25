import React, { Component } from "react";
import Title from "./common/title";

class Donate extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Title title="donate" />

        <section id="donate">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>
                  <i
                    class="fas fa-play"
                    style={{ fontSize: "18px", marginBottom: "2px" }}
                  ></i>{" "}
                  Bank Transfer or Deposits
                </h3>
                <p>
                  Bank Name: <strong>Cal bank</strong>
                </p>
                <p>
                  Branch Name: <strong>Legon</strong>
                </p>
                <p>
                  Account Name: <strong>The Health Factor Foundation</strong>
                </p>
                <p>
                  Account Number: <strong>1400003237976</strong>
                </p>

                <br />
                <h3>
                  <i
                    class="fas fa-play"
                    style={{ fontSize: "18px", marginBottom: "2px" }}
                  ></i>{" "}
                  Mobile Transfers
                </h3>
                <p>
                  MTN MOBILE MERCHANT NUMBER:{" "}
                  <strong>(+233) 24 2348 705</strong>
                </p>
                <p>
                  MOBILE MONEY ACCOUNT NAME:{" "}
                  <strong>THE HEALTH FACTOR FOUNDATION</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Donate;
