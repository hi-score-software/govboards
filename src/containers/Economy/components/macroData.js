import React, { PureComponent } from "react";
import "./data.styles.css";

class MacroData extends PureComponent {
  render() {
    return (
      <div class="col-sm-12 macro">
        <div class="row">
          <div class="col-sm-12">
            <h4>Crude oil</h4>
          </div>
          <div className="col-sm-4 ">
            <div className="card first-card-color">
              <h5>$56</h5>
              <p>Domestic Production</p>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card second-card-color">
              <h5>$56</h5>
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

export default MacroData;
