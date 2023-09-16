import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ViewChild } from '@angular/core';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-issledovaniya-detail',
  templateUrl: './issledovaniya-detail.page.html',
  styleUrls: ['./issledovaniya-detail.page.scss'],
})
export class IssledovaniyaDetailPage implements OnInit {

  public chart: any;

  constructor() { }

  ngOnInit() {

    this.createChart();

  }

  createChart(){
  
    this.chart = new Chart("MyChart2", {

      type: 'line',
  data: {
    labels: ['15.03', '16.03', '17.03', '18.03', '19.03', '20.03'],
    datasets: [{
      label: 'СД4',
      data: [400, 200, 300, 600, 200, 100],
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
