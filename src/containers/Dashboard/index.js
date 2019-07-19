import React, { PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./dashboard.css";
import * as LoadableRoutes from "../../routes";

class Dashboard extends PureComponent {
  state = {
    isMobileMenuVisible: false,
  }

  showMobileMenu = () => {
    this.setState({
      isMobileMenuVisible: true,
    })
  }
  render() {
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
                    <div className="show-on-mobile" onClick={this.showMobileMenu}>
                      <img src={require("../../assets/Icons/menu.svg")} alt=""/>
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
