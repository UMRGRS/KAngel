import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class DoughnutChartComponent implements OnInit{
  ngOnInit(): void {
    this.doughnutChartLabels.length = 0;
    for (let i = 0; i < this.labels.length; i++) {
      this.doughnutChartLabels.push(this.labels[i]);
    }
  }

  @Input({required:true})
  label:string = "";

  @Input({required:true})
  labels:string[] = ["owo", "uwu"];

  chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  }

  public doughnutChartLabels: string[] = [
    'Tiempo de trabajo',
    'Tiempo de descanso',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [100, 100] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}