import { Component, OnInit } from '@angular/core';
import { DataTemplateComponent } from '../../global_components/data-template/data-template.component';
import { ApiDataService } from '../../global-services/api-data.service';
import { Profile } from '../../interfaces/profile-data';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [DataTemplateComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit{
  profileData:Profile | undefined;

  constructor(private apiDataService:ApiDataService){}
  ngOnInit(): void {  
    this.apiDataService.getProfileData().subscribe({
      next:(response)=>{
        this.profileData = response;
      }
    });
  }
}
