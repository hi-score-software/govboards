import React, { PureComponent } from "react";

import "./data.styles.css";

class NdeData extends PureComponent {
  render() {
    return (
      <div className="col-sm-12 ndeData">
        <div className="">
          <div className="col-sm-12">
            <h4>Report on Employability Status of Nigerian Students</h4>
          </div>
          <div className="chart-one mt-0">
          <div className="row">
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>Employability Status of Nigerian Students By gender</h4>

                <img alt="data"
                  style={{ marginTop: 50 }}
                  src={require("../../../assets/charts/employability-status-of-nigerian-students.png")}
                  className="img-responsive"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>Employability Status By gender</h4>
                <img alt="data"
                  src={require("../../../assets/charts/employability-status-by-gender.png")}
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row employability">
          <hr className="borderline mg_tb" />

          <div className="col-sm-6 mg_top-xs">
            <p className="small">
              Most Employable Courses In Nigerian Universities
            </p>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-blue employability-status">
              <h5>1</h5>
              <p>Computer Science</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-green employability-status">
              <h5>2</h5>
              <p>Economics</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-red employability-status">
              <h5>3</h5>
              <p>Electrical Electronics Engineering</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="touquise employability-status">
              <h5>4</h5>
              <p>Accounting</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-blue employability-status">
              <h5>5</h5>
              <p>Mass Communications</p>
            </div>
          </div>

          <div className="col-sm-3 col-6  mg_top-xs">
            <div className="deep-green employability-status">
              <h5>6</h5>
              <p>Biochemistry</p>
            </div>
          </div>

          <div className="col-sm-3 col-6  mg_top-xs">
            <div className="deep-red employability-status">
              <h5>7</h5>
              <p>Computer Engineering</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="touquise employability-status">
              <h5>8</h5>
              <p>Banking & Finance</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-blue employability-status">
              <h5>9</h5>
              <p>Business Administration</p>
            </div>
          </div>

          <div className="col-sm-3 col-6 mg_top-xs">
            <div className="deep-green employability-status">
              <h5>10</h5>
              <p>Microbiology</p>
            </div>
          </div>
        </div>
        <div className="chart-one">
          <div className="row">
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>Most Employable Universities</h4>

                <img alt="data"
                  style={{ marginTop: 50 }}
                  src={require("../../../assets/charts/most employable university.png")}
                  className="img-responsive"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="chart-card height-601 bg-white">
                <h4>medium graduates use to get jobs</h4>
                <img alt="data"
                  src={require("../../../assets/charts/medium-graduates-use-to-get-jobs.png")}
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
                <div className="d-flex align-items-start" style={{width: "100%"}}>
                  <h4>Most Employable industries</h4>
                  
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/most-employable-industries.png")}
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
                <div className="d-flex align-items-start" style={{width: "100%"}}>
                  <h4>Salary distribution for students</h4>
                  
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/salary distribution.png")}
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
                <div className="d-flex align-items-start" style={{width: "100%"}}>
                  <h4>salary to tuition percentages</h4>
                  
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/salary to tuition percentage.png")}
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
                  <h4>Employability status by Gender</h4>
                  <img alt="data"
                  src={require("../../../assets/charts/Group 52.png")}
                  className="img-responsive"
                />
                </div>
                <img alt="data"
                  src={require("../../../assets/charts/employability status by gender (1).png")}
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

export default NdeData;

