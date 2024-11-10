import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiDataService } from '../../global-services/api-data.service';

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

  constructor(private apiService:ApiDataService){}

  filterMachines(){
    if(this.filterForm.valid){
      this.apiService.getFilterMachinesList({machine:this.filterForm.value.machine, area:this.filterForm.value.area}).subscribe({
        next: (response) => {
          console.log(response);
          //Add error message
        },
      });
    }
  }
}
