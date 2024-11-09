import { Component } from '@angular/core';
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { ServicesMenuComponent } from "../services-menu/services-menu.component";
import { AuthManagementService } from '../../global-services/auth-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-header',
  standalone: true,
  imports: [DropdownMenuComponent, ServicesMenuComponent],
  templateUrl: './inside-header.component.html',
  styleUrl: './inside-header.component.css'
})
export class InsideHeaderComponent {

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
