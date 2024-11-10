import { Component, OnInit } from '@angular/core';
import { DataTemplateComponent } from '../../global_components/data-template/data-template.component';
import { ApiDataService } from '../../global-services/api-data.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [DataTemplateComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit{
  constructor(private apiDataService:ApiDataService){}
  ngOnInit(): void {
    //this.apiDataService.getMachineData(2).subscribe({
    //  next:(response)=>{
    //    console.log(response)
    //  }
    //});
  }
}
