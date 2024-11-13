import { Component, Input } from '@angular/core';
import { DataTemplateComponent } from '../../global_components/data-template/data-template.component';
import { MachineResume } from '../../interfaces/machine-resume';

@Component({
  selector: 'app-machine-data',
  standalone: true,
  imports: [DataTemplateComponent],
  templateUrl: './machine-data.component.html',
  styleUrl: './machine-data.component.css'
})
export class MachineDataComponent {
  @Input({required:true})
  machineData:MachineResume | undefined;
}
