import { Component, OnInit, OnDestroy } from '@angular/core';
import { InsideHeaderComponent } from '../../global_components/inside-header/inside-header.component';
import { MachineDataComponent } from "../machine-data/machine-data.component";
import { LineChartComponent } from "../line-chart/line-chart.component";
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";
import { WebSocketService } from '../../global-services/websocket.service';
import { SessionManagementService } from '../../global-services/session-management.service';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-machine-detail',
  standalone: true,
  imports: [InsideHeaderComponent, MachineDataComponent, LineChartComponent, DoughnutChartComponent],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.css'
})
export class MachineDetailComponent implements OnInit, OnDestroy{

  labelsWorkRest:string[] = ["Tiempo de trabajo", "Tiempo de descanso"]
  labelsTank:string[] = ["Vació", "Fluido"]

  constructor(private websocketService: WebSocketService, private sessionService:SessionManagementService) {}
  ngOnDestroy(): void {
    
  }

  ngOnInit() {
    let session:UserInterface | null = this.sessionService.getSession();
    this.websocketService.connect(`wss://intent-smoothly-collie.ngrok-free.app/ws/machine-realtime/2?token=${session?.token}`);
  }

  sendMessage() {
    this.websocketService.sendMessage('Hello, server!');
  }
}
