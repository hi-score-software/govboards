import React, { PureComponent } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import "./dashboard.css";
import * as LoadableRoutes from "../../routes";

class Dashboard extends PureComponent {
  state = {
    isMobileMenuVisible: false
  };

  showMobileMenu = () => {
    this.setState({
      isMobileMenuVisible: true
    });
  };
  render() {
    const path = this.props.match.path;
    return (
      <section className="dashboard-wrapper">
        <section className="dashboard-content">
          <nav>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="nav_menu">
                    <div className="nav_menu-logo">
                      <img
                        src={require("../../assets/images/dashboard-logo.png")}
                        alt="logo"
                      />
                    </div>
                    <div className="nav_menu-list hide-on-mobile">
                      <NavLink
                        exact
                        to={`${path}/economy`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/economy.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Economy</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/labour-business-and-environment`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/labour.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Labour Business and environment</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/social-services-and-investments`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/social-services.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Social Services & Investments</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/travel-and-immigration`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/travel-and-immigration.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Travel & Immigration</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/energy`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/energy.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Energy</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/education`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/education.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Education</span>
                      </NavLink>
                      <NavLink
                        exact
                        to={`${path}/agriculture`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/agriculture.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>Agriculture</span>
                      </NavLink>

                      <NavLink
                        exact
                        to={`${path}/ict`}
                        activeClassName="active"
                      >
                        <img
                          src={require("../../assets/images/ict.svg")}
                          alt=""
                          className="icon-size"
                        />
                        <span>ict</span>
                      </NavLink>
                    </div>
                    <div
                      className="show-on-mobile"
                      onClick={this.showMobileMenu}
                    >
                      <img
                        src={require("../../assets/Icons/menu.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <section className="">
            <Switch>
              <Route
                exact
                path={`${this.props.match.path}`}
                render={() => (
                  <Redirect to={`${this.props.match.path}/economy`} />
                )}
              />
              <Route
                exact
                path={`${this.props.match.path}/economy`}
                component={LoadableRoutes.Economy}
              />
              <Route
                exact
                path={`${
                  this.props.match.path
                }/labour-business-and-environment`}
                component={LoadableRoutes.Labour}
              />
            </Switch>
          </section>
        </section>
      </section>
    );
  }
}

export default Dashboard;
