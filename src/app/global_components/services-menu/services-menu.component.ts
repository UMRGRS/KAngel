import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-menu.component.html',
  styleUrl: './services-menu.component.css'
})
export class ServicesMenuComponent {
  @Input({required:true}) menuId: string = "";
}
