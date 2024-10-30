import { Component } from '@angular/core';
import { DataTemplateComponent } from "../../global/data-template/data-template.component";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [DataTemplateComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

}
