import React, { PureComponent } from "react";
import "./data.styles.css";

class FirsData extends PureComponent {
  render() {
    return (
      <div className="col-sm-12 firs">
        <div className="row">
          <div className="col-sm-12">
            <h4>Revenue</h4>
          </div>
          <div className="col-sm-4 ">
            <div className="card first-card-color">
              <h5>N 45.35 B</h5>
              <p>Total Revenue Per Quarter from Taxes</p>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card second-card-color">
              <h5>42%</h5>
              <p>Ratio of Taxes to GDP Growth</p>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card third-card-color">
              <h5>$56</h5>
              <p>Sources of Federal Tax Revenue</p>
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="borderline mg_tb" />
          <div className="col-sm-12">
            <h4>Revenue breakdown</h4>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-4 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Revenue from Individual Income Taxes</p>
              <h5>58%</h5>
            </div>
          </div>
        </div>
        <div className="chart-five">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white">
                <div className="d-flex justify-content-between align-items-start" style={{width: "100%"}}>
                  <h4>Domestic Production (Monthly growth)</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/individual income tax.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="chart-four">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white">
                <div className="d-flex justify-content-between align-items-start" style={{width: "100%"}}>
                  <h4>Crude Oil Export (Monthly growth)</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/crude-oil-export.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="chart-five">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white">
                <div className="d-flex justify-content-between align-items-start" style={{width: "100%"}}>
                  <h4>Federation Accounts - Revenue (Monthly growth)</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/individual income tax.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="chart-five">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white">
                <div className="d-flex justify-content-between align-items-start" style={{width: "100%"}}>
                  <h4>Gross Oil Revenue (Monthly growth)</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/individual income tax.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="chart-five">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white">
                <div className="d-flex justify-content-between align-items-start" style={{width: "100%"}}>
                  <h4>Gross Oil Revenue (Monthly growth)</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/gross external reserves monthl-growth.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FirsData;
