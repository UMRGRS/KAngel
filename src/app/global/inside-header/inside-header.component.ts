import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-inside-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './inside-header.component.html',
  styleUrl: './inside-header.component.css'
})
export class InsideHeaderComponent {

}
