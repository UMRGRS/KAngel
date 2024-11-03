import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-machines-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './machines-filters.component.html',
  styleUrl: './machines-filters.component.css'
})
export class MachinesFiltersComponent {
  filterForm = new FormGroup({
    identifier: new FormControl(),
    machine: new FormControl(),
    area: new FormControl()
  })

  filterMachines(){
    
  }
}
