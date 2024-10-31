import { Component } from '@angular/core';
import { ServicesMenuComponent } from "../services-menu/services-menu.component";

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ServicesMenuComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {

}
