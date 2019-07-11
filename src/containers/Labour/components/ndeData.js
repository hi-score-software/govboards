import React, { PureComponent } from "react";
import { Doughnut } from "react-chartjs-2";

import "./data.styles.css";






class NdeData extends PureComponent {
  
  render() {
    return (
      <div className="col-sm-12 ndeData">
        <div className="row">
          <div className="col-sm-12">
            <h4>Report on Employability Status of Nigerian Students</h4>
          </div>
          <div className="col-sm-6 ">
            <div className="card ndeData-pie">
              <h5>Employability Status of Nigerian Students By gender</h5>

              <Doughnut
                data={data}
                width={300}
                height={300}
                options={{ maintainAspectRatio: true }}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card ndeData-pie">
              <h5>Employability Status By gender</h5>

              <Doughnut
                data={genderData}
                width={300}
                height={300}
                options={{ maintainAspectRatio: true }}
              />
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

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-blue employability-status">
              <h5>1</h5>
              <p>Computer Science</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-green employability-status">
              <h5>2</h5>
              <p>Economics</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-red employability-status">
              <h5>3</h5>
              <p>Electrical Electronics Engineering</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card touquise employability-status">
              <h5>4</h5>
              <p>Accounting</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-blue employability-status">
              <h5>5</h5>
              <p>Mass Communications</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-green employability-status">
              <h5>6</h5>
              <p>Biochemistry</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-red employability-status">
              <h5>7</h5>
              <p>Computer Engineering</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card touquise employability-status">
              <h5>8</h5>
              <p>Banking & Finance</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-blue employability-status">
              <h5>9</h5>
              <p>Business Administration</p>
            </div>
          </div>

          <div className="col-sm-3 mg_top-xs">
            <div className="card deep-green employability-status">
              <h5>10</h5>
              <p>Microbiology</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NdeData;


const data = {
	labels: [
		'Umemployed',
		'working full time',
		'preparing for further study'
	],
	datasets: [{
		data: [300, 100, 50, 200],
		backgroundColor: [
		'#ED4700',
		'#2D9CDB',
    '#370AB7',
    '#0AB7A2'
		],
	}]
};

const genderData = {
	labels: [
		'female',
		'Male',
	],
	datasets: [{
		data: [300, 200],
		backgroundColor: [
      '#370AB7',
      '#ED4700',
		],
	}]
};