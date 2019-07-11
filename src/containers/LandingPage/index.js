import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Landing extends PureComponent {
  render() {
    return (
      <section id="welcome-screen">
        <section className="">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-sm-4">
                <div className="logo-action">
                  <div className="logo-con">
                    <img
                      src={require("../../assets/images/logo-one.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="welcome-speach d-flex flex-column">
                    <h1>Welcome to GovBoards</h1>
                    <Link
                      to="/home"
                      className="btn btn-block btn btn-white box-shadow welcome-btn"
                    >
                      Enter
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <img
                  src={require("../../assets/images/Mask Group.png")}
                  className="people-image"
                  alt="mastehad"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Landing;
