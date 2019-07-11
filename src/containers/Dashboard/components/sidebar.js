import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  state = {
    admin: ""
  };
  onLogout = () => {
    window.localStorage.clear();
    this.props.history.push("/");
  };

  componentDidMount() {
    const admin = JSON.parse(window.localStorage.getItem("current_user"));
    this.setState({ admin });
  }

  render() {
    const path = this.props.match.path;
    return (
      <div className="wrapper">
        <div className="logo-details">
          <Link to={"/"}>
            <img
              src={require("../../../assets/images/dashboard-logo.png")}
              className="logo"
              alt="logo"
            />
          </Link>
        </div>

        <ul className="menu">
          <li>
            <NavLink exact to={`${path}/economy`} activeClassName="active">
              <img
                src={require("../../../assets/images/economy.svg")}
                alt=""
                className="icon-size"
              />
              <span>Economy</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${path}/labour-business-and-environment`}
              activeClassName="active"
            >
              <img
                src={require("../../../assets/images/labour.svg")}
                alt=""
                className="icon-size"
              />
              <span>Labour Business and environment</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${path}/social-services-and-investments`}
              activeClassName="active"
            >
              <img
                src={require("../../../assets/images/social-services.svg")}
                alt=""
                className="icon-size"
              />
              <span>Social Services & Investments</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact to={`${path}/love-meals`} activeClassName="active">
              <img src={require('../../assets/sidebar/diary-product.svg')} alt="" className="icon-size"/>
              <span>Love Meals</span>
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink exact to={`${path}/customers`} activeClassName="active">
              <ion-icon name="md-people" className="icon-size" />
              <span>Customers</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink exact to={`${path}/travel-and-immigration`} activeClassName="active">
            <img
                src={require("../../../assets/images/travel-and-immigration.svg")}
                alt=""
                className="icon-size"
              />
              <span>Travel & Immigration</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${path}/energy`} activeClassName="active">
            <img
                src={require("../../../assets/images/energy.svg")}
                alt=""
                className="icon-size"
              />
              <span>Energy</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${path}/education`} activeClassName="active">
            <img
                src={require("../../../assets/images/education.svg")}
                alt=""
                className="icon-size"
              />
              <span>Education</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${path}/agriculture`} activeClassName="active">
            <img
                src={require("../../../assets/images/agriculture.svg")}
                alt=""
                className="icon-size"
              />
              <span>Agriculture</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${path}/ict`} activeClassName="active">
            <img
                src={require("../../../assets/images/ict.svg")}
                alt=""
                className="icon-size"
              />
              <span>ict</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
