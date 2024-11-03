import { Component } from '@angular/core';
import { InsideHeaderComponent } from "../../global/inside-header/inside-header.component";
import { MachinesListPagesComponent } from "../machines-list-pages/machines-list-pages.component";
import { MachinesFiltersComponent } from "../machines-filters/machines-filters.component";

@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [InsideHeaderComponent, MachinesListPagesComponent, MachinesFiltersComponent],
  templateUrl: './machines-list.component.html',
  styleUrl: './machines-list.component.css'
})
export class MachinesListComponent {
  
}
