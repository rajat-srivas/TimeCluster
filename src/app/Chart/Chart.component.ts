import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ChartService } from './../_service/Chart.service';

@Component({
  selector: 'app-Chart',
  templateUrl: './Chart.component.html',
  styleUrls: ['./Chart.component.css']
})
export class ChartComponent implements OnInit {
  data = [];
  color = [];
  radius = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.GetChart();
  }

  GetChart() {
    // tslint:disable-next-line: forin
    for (const item in this.chartService.clusterData2) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      let counter = 0;
      const value = this.chartService.clusterData2[item];
      value.x.forEach(z => {
              this.data.push({x: value.x[counter], y: value.y[counter]});
              counter++;
              this.color.push(randomColor);
              if (item.toLowerCase() !== 'center') {
                this.radius.push(4);
              } else {
                this.radius.push(8);
              }
            });
    }
    // console.log(this.data);
    // console.log(this.color);
    // console.log(this.radius);


    let scatterChart = new Chart('canvas', {
      type: 'scatter',
      data: {
          datasets: [{
              pointBackgroundColor: this.color,
              pointRadius: this.radius,
              label: 'Scatter Dataset',
              data: [...this.data]
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  position: 'bottom'
              }]
          }
      }
  });
  }
}
