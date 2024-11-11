import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiDataService } from '../../global-services/api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-action-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './quick-action-card-form.component.html',
  styleUrl: './quick-action-card-form.component.css'
})
export class QuickActionCardFormComponent {
  machineForm = new FormGroup({
    id: new FormControl('')
  });

  constructor(private apiService:ApiDataService, private router:Router){}

  searchMachine(){
    if(this.machineForm.valid){
      this.apiService.getMachineData(Number(this.machineForm.value.id)).subscribe({
        next:(response)=>{
          if(response.error==null){
            this.router.navigate([`/machine-detail/${response.id}`])
          }
        },
        error:(error)=>{
          //Display error
        }
      });
    }
  }
}
