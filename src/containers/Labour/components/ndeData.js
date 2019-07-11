import React, { PureComponent } from "react";
import "./data.styles.css";

class NdeData extends PureComponent {
  render() {
    return (
      <div class="col-sm-12 ndeData">
        <div class="row">
          <div class="col-sm-12">
            <h4>Report on Employability Status of Nigerian Students</h4>
          </div>
          <div className="col-sm-6 ">
            <div className="card ndeData-pie">
              <h5>1880.86</h5>
              <p>Domestic Production (BBL/D/1K)</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card ndeData-pie">
              <h5>NGN 1.49B</h5>
              <p>Crude Oil Export</p>
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

export default NdeData;
