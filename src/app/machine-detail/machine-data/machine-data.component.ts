import { Component } from '@angular/core';
import { DataTemplateComponent } from '../../global_components/data-template/data-template.component';

@Component({
  selector: 'app-machine-data',
  standalone: true,
  imports: [DataTemplateComponent],
  templateUrl: './machine-data.component.html',
  styleUrl: './machine-data.component.css'
})
export class MachineDataComponent {

}
