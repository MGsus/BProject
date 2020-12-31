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
  };

  barChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.datos[0]);

    this.barChartData = [{ data: this.datos[0], label: 'Opportunities' }];
  }
}
