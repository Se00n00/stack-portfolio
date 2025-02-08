import { ChangeDetectorRef, Component, effect, inject, VERSION, OnInit, PLATFORM_ID,ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ApexOptions } from 'apexcharts';
// import { ApexChart,ApexAxisChartSeries,ApexDataLabels,ApexTitleSubtitle } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import file from "../../../public/data.json"

import {ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  // title: ApexTitleSubtitle
  fill:ApexFill;
  legend:ApexLegend;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-charts',
  imports:[NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent  implements OnInit{
  public skill:any[] = file.skills;
  
  // @ViewChild("chart") chart: ChartComponent;
  public frontend: any;
  public backend: any;
  public database: any;
  public ml: any;

  FROTEND = [10,9,8,7,6]
  BACKENED = [10,5,3,2,1]
  DATABSE = [10,10,10,10,5]
  ML = [10,7,6,5,1]

  ngOnInit(){
    this.frontend = {
      series: [
        {
          name: "",
          data: this.FROTEND,
          
        },
      ],
      chart: {
        background: '#fff00000',
        height: 100,
        width:200,
        foreColor: "#00ff0000",
        type: "heatmap",
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        heatmap: {
          radius: 20,
          shadeIntensity: 0.1,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                name: "low",
                color: "#00A100"
              },
              {
                from: 6,
                to: 20,
                name: "medium",
                color: "#128FD9"
              },
              {
                from: 21,
                to: 45,
                name: "high",
                color: "#FFB200"
              },
              {
                from: 46,
                to: 55,
                name: "extreme",
                color: "#FF0000"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      }
      
    };

  }
  public generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "W" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}
