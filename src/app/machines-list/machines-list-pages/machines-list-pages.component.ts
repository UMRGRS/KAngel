import { Component, Input, OnInit } from '@angular/core';
import { MachinesListCardComponent } from "../machines-list-card/machines-list-card.component";
import { MachineList } from '../../interfaces/machine-list';
import { ApiDataService } from '../../global-services/api-data.service';

@Component({
  selector: 'app-machines-list-pages',
  standalone: true,
  imports: [MachinesListCardComponent],
  templateUrl: './machines-list-pages.component.html',
  styleUrl: './machines-list-pages.component.css'
})
export class MachinesListPagesComponent implements OnInit{
  @Input({required:true}) machines:MachineList | undefined;
  isNextDisable:boolean = true;
  isPrevDisable:boolean = true;

  constructor(private apiDataService:ApiDataService){}

  ngOnInit(): void {
    
    this.apiDataService.getMachinesList(undefined).subscribe({
      next:(response)=>{
        if(response.error == null){
          this.machines = response;
          this.isNextDisable = !!!this.machines.next;
          this.isPrevDisable = !!!this.machines.previous;
        }
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }

  changeMachineList(url?:string){
    this.apiDataService.getMachinesList(url).subscribe({
      next:(response)=>{
        if(response.error == null){
          this.machines = response;
          this.isNextDisable = !!!this.machines.next;
          this.isPrevDisable = !!!this.machines.previous;
        }
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }
  


}
