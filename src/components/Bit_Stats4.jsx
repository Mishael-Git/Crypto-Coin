import React, { Component } from "react";
import Chart from "react-apexcharts";
class Bit_Stats4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70],
        },
      ],
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="800"
              height="200"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bit_Stats4;