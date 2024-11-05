import { Component } from '@angular/core';
import { InsideHeaderComponent } from "../../global/inside-header/inside-header.component";
import { MachineDataComponent } from "../machine-data/machine-data.component";
import { LineChartComponent } from "../line-chart/line-chart.component";
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";

@Component({
  selector: 'app-machine-detail',
  standalone: true,
  imports: [InsideHeaderComponent, MachineDataComponent, LineChartComponent, DoughnutChartComponent],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.css'
})
export class MachineDetailComponent {
  labelsWorkRest:string[] = ["Tiempo de trabajo", "Tiempo de descanso"]
  labelsTank:string[] = ["Vació", "Fluido"]
}
