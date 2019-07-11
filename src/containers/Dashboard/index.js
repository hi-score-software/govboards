import React, { PureComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/sidebar";
import "./dashboard.css";
import * as LoadableRoutes from "../../routes";

class Dashboard extends PureComponent {
  render() {
    return (
      <section className="dashboard-wrapper">
        <Sidebar />
        <section className="dashboard-content">
          <nav>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="header-menu">
                    <div className="header_logo-with-search">
                      <div className="form-group">
                        <input type="text" placeholder="SEARCH" />
                        <div className="form-group-icon">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.9872 0C10.8538 0 13.9969 3.14986 13.9969 6.99224C13.9969 8.62302 13.4316 10.0974 12.5045 11.3038L17.7117 16.3022C18.0961 16.7043 18.0961 17.3298 17.7117 17.7096C17.5082 17.9106 17.2595 18 17.0107 18C16.7394 18 16.4907 17.9106 16.2872 17.7096L11.08 12.6888C9.92674 13.5154 8.52481 13.9845 7.00981 13.9845C3.14317 13.9845 0.000120163 10.8346 0.000120163 6.99224C-0.0224915 3.12752 3.12057 0 6.9872 0ZM6.9872 12.2197C9.85891 12.2197 12.1879 9.87403 12.1879 6.99224C12.1879 4.11045 9.85891 1.76482 6.9872 1.76482C4.11549 1.76482 1.78646 4.11045 1.78646 6.99224C1.78646 9.87403 4.11549 12.2197 6.9872 12.2197ZM3.48236 7.0816C3.52758 7.46137 3.86675 7.75179 4.25115 7.75179C4.29638 7.75179 4.31899 7.75179 4.36421 7.75179C4.79384 7.68477 5.0878 7.30499 5.04258 6.88054C4.88429 5.71889 6.19578 5.11573 6.26362 5.09339C6.64802 4.91467 6.82892 4.44555 6.64802 4.06578C6.46713 3.68601 6.01489 3.5073 5.60787 3.66367C5.51743 3.68601 3.16579 4.7583 3.48236 7.0816ZM5.13302 8.77939C4.97474 8.93577 4.86168 9.18151 4.86168 9.40491C4.86168 9.65064 4.95213 9.87403 5.13302 10.0304C5.29131 10.1868 5.54004 10.2985 5.76615 10.2985C5.99227 10.2985 6.24101 10.2091 6.39929 10.0304C6.55758 9.87403 6.67063 9.6283 6.67063 9.40491C6.67063 9.18151 6.58019 8.93577 6.39929 8.77939C6.24101 8.62302 5.99227 8.51133 5.76615 8.51133C5.54004 8.51133 5.31392 8.60068 5.13302 8.77939Z"
                              fill="#C4C4C4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="user-short">
                      <div className="user-photo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" />
                        </svg>
                      </div>
                      <p>Osinbanjo</p>
                      <div class="down-arrow">
                        <svg
                          viewBox="0 0 5 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 3C2.40521 3 2.31904 2.96472 2.25011 2.89416L0.0958868 0.600902C-0.0333665 0.459779 -0.0333686 0.239275 0.104502 0.098152C0.242372 -0.0341511 0.4578 -0.0341506 0.59567 0.106973L2.5 2.13562L4.40434 0.106973C4.53359 -0.0341506 4.75763 -0.0341511 4.8955 0.098152C5.03337 0.230455 5.03336 0.459779 4.9041 0.600902L2.74989 2.89416C2.68096 2.96472 2.59479 3 2.5 3Z"
                            fill="#13761E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <section className>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route
                    exact
                    path={`${this.props.match.path}/economy`}
                    // render={() => (
                    //   <Redirect to={`${this.props.match.path}/economy`} />
                    // )}
                    component={LoadableRoutes.Economy}
                  />
                </Switch>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Dashboard;