import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ViewChild } from '@angular/core';

import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TestPagePage implements OnInit {

  public chart: any;
  

  constructor() { }

  ngOnInit() {
    
    this.createChart();

  }


  createChart(){
  
    this.chart = new Chart("MyChart", {

      type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    }
  }
      
    });

  }

  


}
