import React, { PureComponent } from "react";
import "./data.styles.css";

class MacroData extends PureComponent {
  render() {
    return (
      <div className="col-sm-12 macro">
        <div className="row">
          <div className="col-sm-12">
            <h4>Crude oil</h4>
          </div>
          <div className="col-sm-4 ">
            <div className="card first-card-color">
              <h5>1880.86</h5>
              <p>Domestic Production (BBL/D/1K)</p>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card second-card-color">
              <h5>NGN 1.49B</h5>
              <p>Crude Oil Export</p>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card third-card-color">
              <h5>$56</h5>
              <p>Price (US$/Barrel)</p>
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="borderline mg_tb" />
          <div className="col-sm-12">
            <h4>Domestic Production (Monthly growth)</h4>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>All time Inflation Rate</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Nigeria’s Gross External Reserves</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Consumer Price Index</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-green revenue">
              <p>Federation Accounts</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Gross Oil Revenue</p>
              <h5>58%</h5>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Federal Government Expenditure</p>
              <h5>58%</h5>
            </div>
          </div>
          <div className="col-sm-3 mg_top-xs">
            <div className="card border-left border-red revenue">
              <p>Foreign Assets: Central Bank and Banks</p>
              <h5>58%</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MacroData;
