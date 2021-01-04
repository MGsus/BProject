import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() datos: any;
  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }],
    },
    title: {
      display: true,
      text: "Monto de oportunidades según el Quarter"
    }
  };
  ssIdentifiedQ1: number;
  ssValidatedQ1: number;
  ssQualifiedQ1: number;
  ssWonQ1: number;

  ssIdentifiedQ2: number;
  ssValidatedQ2: number;
  ssQualifiedQ2: number;
  ssWonQ2: number;

  ssIdentifiedQ3: number;
  ssValidatedQ3: number;
  ssQualifiedQ3: number;
  ssWonQ3: number;

  ssIdentifiedQ4: number;
  ssValidatedQ4: number;
  ssQualifiedQ4: number;
  ssWonQ4: number;

  dataWon = [];
  dataValidated = [];
  dataIdentified = [];
  dataQualified = [];

  barChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];

  constructor() {}

  ngOnInit(): void {
    this.ssIdentifiedQ1 = 0;
    this.ssValidatedQ1 = 0;
    this.ssQualifiedQ1 = 0;
    this.ssWonQ1 = 0;

    this.ssIdentifiedQ2 = 0;
    this.ssValidatedQ2 = 0;
    this.ssQualifiedQ2 = 0;
    this.ssWonQ2 = 0;

    this.ssIdentifiedQ3 = 0;
    this.ssValidatedQ3 = 0;
    this.ssQualifiedQ3 = 0;
    this.ssWonQ3 = 0;

    this.ssIdentifiedQ4 = 0;
    this.ssValidatedQ4 = 0;
    this.ssQualifiedQ4 = 0;
    this.ssWonQ4 = 0;

    console.log(this.datos);
    this.datos.forEach((item: any) => {
      switch (item.opp_sales_stage) {
        case 'Validated':
          switch (item.opp_quarter) {
            case 'Q1':
              this.ssValidatedQ1 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q2':
              this.ssValidatedQ2 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q3':
              this.ssValidatedQ3 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q4':
              this.ssValidatedQ4 += Number.parseFloat(item.opp_monto);
              break;
            default:
              break;
          }
          break;
        case 'Identified':
          switch (item.opp_quarter) {
            case 'Q1':
              this.ssIdentifiedQ1 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q2':
              this.ssIdentifiedQ2 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q3':
              this.ssIdentifiedQ3 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q4':
              this.ssIdentifiedQ4 += Number.parseFloat(item.opp_monto);
              break;
            default:
              break;
          }
          break;
        case 'Qualified':
          switch (item.opp_quarter) {
            case 'Q1':
              this.ssQualifiedQ1 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q2':
              this.ssQualifiedQ2 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q3':
              this.ssQualifiedQ3 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q4':
              this.ssQualifiedQ4 += Number.parseFloat(item.opp_monto);
              break;
            default:
              break;
          }
          break;
        case 'Won':
          switch (item.opp_quarter) {
            case 'Q1':
              this.ssWonQ1 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q2':
              this.ssWonQ2 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q3':
              this.ssWonQ3 += Number.parseFloat(item.opp_monto);
              break;
            case 'Q4':
              this.ssWonQ4 += Number.parseFloat(item.opp_monto);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    });

    this.dataWon.push(this.ssWonQ1);
    console.log(this.ssWonQ1);

    this.dataWon.push(this.ssWonQ2);
    this.dataWon.push(this.ssWonQ3);
    this.dataWon.push(this.ssWonQ4);

    this.dataIdentified.push(this.ssIdentifiedQ1);
    this.dataIdentified.push(this.ssIdentifiedQ2);
    this.dataIdentified.push(this.ssIdentifiedQ3);
    this.dataIdentified.push(this.ssIdentifiedQ4);

    this.dataQualified.push(this.ssQualifiedQ1);
    this.dataQualified.push(this.ssQualifiedQ2);
    this.dataQualified.push(this.ssQualifiedQ3);
    this.dataQualified.push(this.ssQualifiedQ4);

    this.dataValidated.push(this.ssValidatedQ1);
    this.dataValidated.push(this.ssValidatedQ2);
    this.dataValidated.push(this.ssValidatedQ3);
    this.dataValidated.push(this.ssValidatedQ4);

    this.barChartData = [
      { data: this.dataWon, label: 'Won' },
      { data: this.dataIdentified, label: 'Identified' },
      { data: this.dataValidated, label: 'Validated' },
      { data: this.dataQualified, label: 'Qualified' },
    ];
  }
}
