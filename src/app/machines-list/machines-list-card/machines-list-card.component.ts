import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MachineResume } from '../../interfaces/machine-resume';

@Component({
  selector: 'app-machines-list-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './machines-list-card.component.html',
  styleUrl: './machines-list-card.component.css'
})
export class MachinesListCardComponent {
  @Input({required:true})
  machine:MachineResume | undefined;
}
