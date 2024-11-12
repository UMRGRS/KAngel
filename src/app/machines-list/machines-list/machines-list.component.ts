import { Component } from '@angular/core';
import { InsideHeaderComponent } from '../../global_components/inside-header/inside-header.component';
import { MachinesListPagesComponent } from "../machines-list-pages/machines-list-pages.component";
import { MachinesFiltersComponent } from "../machines-filters/machines-filters.component";
import { MachineList } from '../../interfaces/machine-list';

@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [InsideHeaderComponent, MachinesListPagesComponent, MachinesFiltersComponent],
  templateUrl: './machines-list.component.html',
  styleUrl: './machines-list.component.css'
})
export class MachinesListComponent {
  machineList:MachineList | undefined;

  handleEvent(event: MachineList) {
    console.log(event);
  }
}
