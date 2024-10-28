import { Component } from '@angular/core';
import { InsideHeaderComponent } from "../../global/inside-header/inside-header.component";
import { ProfileCardComponent } from "../profile-card/profile-card.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InsideHeaderComponent, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
