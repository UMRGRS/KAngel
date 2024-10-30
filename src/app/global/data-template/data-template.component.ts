import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-template',
  standalone: true,
  imports: [],
  templateUrl: './data-template.component.html',
  styleUrl: './data-template.component.css'
})
export class DataTemplateComponent {
  @Input({ required: true }) 
  title:string = "";

  @Input({ required: true })
  data:string = "";
}
