import React, { PureComponent } from "react";
import Tabs from "../../components/Tab";

import MacroData from "./components/ndeData";


import "./labour.css";

class Labour extends PureComponent {
  state = {
    tabs: {
      active: "nde"
    }
  };
  render() {
    console.log(this.props);
    const content = {
      nde: <MacroData />,
    };
    return (
      <section className="dashboard-body-wrapper">
        <div className="tabs labour-page">
          <h1>LABOUR AND BUSINESS ENVIRONMENT</h1>
          <div className="tab-container">
            <Tabs
              active={this.state.tabs.active}
              onChange={active => this.setState({ tabs: { active } })}
            >
              <div key="nde">NATIONAL DIRECTORATE OF EMPLOYMENT</div>
             
            </Tabs>
          </div>
          <div className="tab-container-body">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12">
                  <div className="tabs-content">
                    <div className="row">{content[this.state.tabs.active]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Labour;
