import { Component } from '@angular/core';
import { MachinesListCardComponent } from "../machines-list-card/machines-list-card.component";
import { MachineResume } from '../../interfaces/machine-resume';

@Component({
  selector: 'app-machines-list-pages',
  standalone: true,
  imports: [MachinesListCardComponent],
  templateUrl: './machines-list-pages.component.html',
  styleUrl: './machines-list-pages.component.css'
})
export class MachinesListPagesComponent {
  machines:MachineResume[] = [
    { id: 123456, machine: "Torno CNC", area: "Producción", error:null },
    { id: 987654, machine: "Fresadora", area: "Mantenimiento", error:null },
    { id: 345678, machine: "Prensa Hidráulica", area: "Producción", error:null },
    { id: 456789, machine: "Soldadora", area: "Calidad", error:null },
    { id: 234567, machine: "Cortadora Láser", area: "Producción", error:null },
    { id: 678901, machine: "Pulidora", area: "Almacenamiento", error:null },
    { id: 789012, machine: "Impresora 3D", area: "Innovación", error:null },
    { id: 890123, machine: "Robótica", area: "Automatización", error:null },
    { id: 901234, machine: "Cinta transportadora", area: "Logística", error:null },
    { id: 567890, machine: "CNC Router", area: "Diseño", error:null }
  ];
}
