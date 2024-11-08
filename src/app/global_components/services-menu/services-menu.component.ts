import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-menu',
  standalone: true,
  imports: [],
  templateUrl: './services-menu.component.html',
  styleUrl: './services-menu.component.css'
})
export class ServicesMenuComponent {
  @Input({required:true}) menuId: string = "";
}
