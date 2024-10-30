import { Component } from '@angular/core';
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";

@Component({
  selector: 'app-inside-header',
  standalone: true,
  imports: [DropdownMenuComponent],
  templateUrl: './inside-header.component.html',
  styleUrl: './inside-header.component.css'
})
export class InsideHeaderComponent {

}
