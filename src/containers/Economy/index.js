import React, { PureComponent } from "react";
import Tabs from "../../components/Tab";

import MacroData from './components/macroData';
import FirsData from './components/firsData';

import "./economy.css";

class Economy extends PureComponent {
  state = {
    tabs: {
      active: "macro"
    },
  }
  render() {
    console.log(this.props);
    const content = {
      macro: <MacroData />,
      firs: <FirsData />
    };
    return (
      <section className="dashboard-body-wrapper">
        <div className="tabs">
          <h1>Economy</h1>
          <div className="tab-container">
            <Tabs
              active={this.state.tabs.active}
              onChange={active => this.setState({ tabs: { active } })}
            >
              <div key="macro">MACRO DATA (CBN)</div>
              <div key="firs">FEDERAL INLAND REVENUE SERVICE</div>
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

export default Economy;
