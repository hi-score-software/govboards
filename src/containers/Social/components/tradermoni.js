import React, { PureComponent } from "react";
import "../../Economy/components/data.styles.css";

class TraderMoni extends PureComponent {
  render() {
    return (
      <div className="col-sm-12 macro social">
        <div className="row">
          <div className="col-sm-12">
            <img src={require("../../../assets/images/Group 60.png")} alt="" />
          </div>
        </div>
        <div className="row">
          <hr className="borderline mg_tb" />

          <div className="row">
            <div className="col-sm-6">
              <img
                src={require("../../../assets/charts/no-of-applicants.png")}
                alt="charts"
              />
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12 mg_top-xs">
                  <div className="card border-left first-card-color social-mg-bottom">
                    <p>Revenue </p>
                    <h5>NGN 4.19B</h5>
                  </div>
                </div>

                <div className="col-sm-12 mg_top-xs">
                  <div className="card border-left second-card-color social-mg-bottom">
                    <p>Total No. of Loans</p>
                    <h5>NGN 4.19B</h5>
                  </div>
                </div>

                <div className="col-sm-12 mg_top-xs">
                  <div className="card border-left third-card-color social-mg-bottom">
                    <p>total amount of loans</p>
                    <h5>NGN 4.19B</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="chart-one">
          <div className="row">
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>Sources of Tax Revenue</h4>
                <img
                  alt="data"
                  src={require("../../../assets/charts/source-of-tax-revenue.png")}
                  className="img-responsive"
                />
                <img
                  alt="data"
                  style={{ marginTop: 50 }}
                  src={require("../../../assets/charts/tax-revenue-information.png")}
                  className="img-responsive"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>Sources of Tax Revenue</h4>
                <img
                  alt="data"
                  src={require("../../../assets/charts/corporate income taxes.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="chart-two">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card">
                <img
                  alt="data"
                  src={require("../../../assets/charts/total-enumerated.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="chart-three">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card bg-white" style={{ padding: 30 }}>
                <div
                  className="d-flex justify-content-between align-items-start"
                  style={{ width: "100%" }}
                >
                  <h4>Top 10 Enumerated States</h4>
                </div>
                <img
                  alt="data"
                  src={require("../../../assets/images/Group 59.png")}
                  className="img-responsive"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="chart-three">
          <div className="row">
            <div className="col-sm-12">
              <div className="chart-card">
                <img
                  alt="data"
                  src={require("../../../assets/images/gender-distribution.png")}
                  className="img-responsive"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TraderMoni;
