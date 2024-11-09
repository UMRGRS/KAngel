import { Component } from '@angular/core';
import { ServicesMenuComponent } from "../services-menu/services-menu.component";
import { AuthManagementService } from '../../global-services/auth-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ServicesMenuComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  constructor(private authService:AuthManagementService, private router: Router){}

  logout(){
      this.authService.logout().subscribe({
        next: (response) => {
          if(response.error==null){
            this.router.navigate([''])
          }
          //Add error message
        },
        error: (error) =>{
          console.log(error);
        }
      });
  }
}
