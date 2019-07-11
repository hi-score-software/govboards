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
      </div>
    );
  }
}

export default FirsData;
