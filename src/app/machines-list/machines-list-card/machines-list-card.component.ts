import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-machines-list-card',
  standalone: true,
  imports: [],
  templateUrl: './machines-list-card.component.html',
  styleUrl: './machines-list-card.component.css'
})
export class MachinesListCardComponent {
  @Input({required:true})
  id:number = 0;

  @Input({required:true})
  machine:string = "";

  @Input({required:true})
  area:string = "";
}
