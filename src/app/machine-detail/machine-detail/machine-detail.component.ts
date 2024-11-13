import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { InsideHeaderComponent } from '../../global_components/inside-header/inside-header.component';
import { MachineDataComponent } from "../machine-data/machine-data.component";
import { LineChartComponent } from "../line-chart/line-chart.component";
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";
import { WebSocketService } from '../../global-services/websocket.service';
import { SessionManagementService } from '../../global-services/session-management.service';
import { UserInterface } from '../../interfaces/user-interface';
import { ApiDataService } from '../../global-services/api-data.service';
import { ActivatedRoute } from '@angular/router';
import { MachineResume } from '../../interfaces/machine-resume';
import { Subscription } from 'rxjs';
import { MachineRd } from '../../interfaces/machine-rd';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-machine-detail',
  standalone: true,
  imports: [InsideHeaderComponent, MachineDataComponent, LineChartComponent, DoughnutChartComponent],
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit, OnDestroy {

  machineID = -1;
  machineData: MachineResume | undefined;
  machineRdData: MachineRd | undefined;
  private messageSubscription!: Subscription;

  pressureArray: number[] = [2,2.5,4,3,5];
  fluidArray: number[] = [2,2.5,4,3,5];
  workStopData: number[] = [100, 100]
  tankLevel: number[] = [100, 0]

  pressureChartData:ChartConfiguration['data'] = {
    datasets: [
      { 
        //Change to relevant data
        data: this.pressureArray,
        label: 'Presión',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['', '', '', ''],
  };
  fluidChartData:ChartConfiguration['data'] = {
    datasets: [
      { 
        //Change to relevant data
        data: this.fluidArray,
        label: 'Presión',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['', '', '', ''],
  };

  workStopChartData: ChartData<'doughnut'> = {
    labels: ["Tiempo de trabajo", "Tiempo de descanso"],
    datasets: [
      { data: this.workStopData },
    ],
  };

  tankLevelChartData: ChartData<'doughnut'> = {
    labels: ["Vacío", "Fluido"],
    datasets: [
      { data: this.tankLevel },
    ],
  };

  constructor(
    private websocketService: WebSocketService,
    private sessionService: SessionManagementService,
    private apiService: ApiDataService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.machineID = Number(this.activatedRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    // Fetch machine data initially
    this.apiService.getMachineData(this.machineID).subscribe({
      next: (data) => {
        this.machineData = data;
      },
      error: (error) => {
        console.error('Failed to fetch machine data:', error);
      }
    });

    this.updateData();    
  }

  ngOnDestroy(): void {
    // Unsubscribe from WebSocket messages to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  updateData(){
    // Start WebSocket connection
    const session: UserInterface | null = this.sessionService.getSession();
    if (session?.token) {
      this.websocketService.connect(`wss://intent-smoothly-collie.ngrok-free.app/ws/machine-realtime/${this.machineID}?token=${session.token}`);
    }

    // Subscribe to WebSocket messages
    this.messageSubscription = this.websocketService.messages$.subscribe(
      (data) => {
        const jsonObject = JSON.parse(data);
        this.machineRdData = jsonObject;

        // Update pressure and fluid data arrays for charting
        if (this.pressureArray.length >= 5) {
          this.pressureArray.shift();
        }
        this.pressureArray.push(this.machineRdData?.pressure ?? 0);

        this.pressureChartData ={
          datasets: [
            { 
              //Change to relevant data
              data: this.pressureArray,
              label: 'Presión',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            },
          ],
          labels: ['', '', '', ''],
        };

        if (this.fluidArray.length >= 5) {
          this.fluidArray.shift();
        }
        this.fluidArray.push(this.machineRdData?.fluid_volume ?? 0);

        this.fluidChartData = {
          datasets: [
            { 
              //Change to relevant data
              data: this.fluidArray,
              label: 'Presión',
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              fill: 'origin',
            },
          ],
          labels: ['', '', '', ''],
        }; 

        // Update work and tank data for doughnut chart components
        this.workStopData = [this.machineRdData?.work_time ?? 0, this.machineRdData?.stop_time ?? 0];
        this.tankLevel = [100 - (this.machineRdData?.tank_level ?? 0), this.machineRdData?.tank_level ?? 0,];

        this.workStopChartData = {
          labels: ["Tiempo de trabajo", "Tiempo de descanso"],
          datasets: [
            { data: this.workStopData },
          ],
        };
      
        this.tankLevelChartData = {
          labels: ["Vacío", "Fluido"],
          datasets: [
            { data: this.tankLevel },
          ],
        };

      }
    );
  }
}
