import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class DoughnutChartComponent{

  @Input({required:true})
  doughnutChartData:ChartData<'doughnut'> | undefined;

  @Input({required:true})
  label:string = "";

  chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 0
    }
  }

  public doughnutChartType: ChartType = 'doughnut';
}