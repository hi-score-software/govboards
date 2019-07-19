import React, { PureComponent } from "react";
import Tabs from "../../components/Tab";

import TraderMoni from "./components/tradermoni";


import "./social.css";

class Social extends PureComponent {
  state = {
    tabs: {
      active: "Tradermoni"
    }
  };
  render() {
    console.log(this.props);
    const content = {
      Tradermoni: <TraderMoni />,
    };
    return (
      <section className="dashboard-body-wrapper">
        <div className="tabs">
          <div className="container">
            <h1>SOCIAL SERVICES INITIATIVES</h1>
            <div className="tab-container">
              <Tabs
                active={this.state.tabs.active}
                onChange={active => this.setState({ tabs: { active } })}
              >
                <div key="Tradermoni">TRADERMONI</div>
              
              </Tabs>
            </div>
          </div>
          <div className="tab-container-body">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12">
                  <div className="tabs-content">
                    {content[this.state.tabs.active]}
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

export default Social;
