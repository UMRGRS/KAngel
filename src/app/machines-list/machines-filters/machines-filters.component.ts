import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiDataService } from '../../global-services/api-data.service';
import { MachineList } from '../../interfaces/machine-list';

@Component({
  selector: 'app-machines-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './machines-filters.component.html',
  styleUrl: './machines-filters.component.css'
})
export class MachinesFiltersComponent {
  filterForm = new FormGroup({
    machine: new FormControl(),
    area: new FormControl()
  })

  @Input({required:true}) machineList:MachineList | undefined;
  @Output() machineListChange = new EventEmitter<MachineList>();

  constructor(private apiService:ApiDataService){}

  filterMachines(){
    if(this.filterForm.valid){
      this.apiService.getFilterMachinesList({machine:this.filterForm.value.machine, area:this.filterForm.value.area}).subscribe({
        next: (response) => {
          if(response.error == null){
            this.machineListChange.emit(response);
          }
        },
      });
    }
  }
}
