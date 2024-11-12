import { Component } from '@angular/core';
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { ServicesMenuComponent } from "../services-menu/services-menu.component";
import { AuthManagementService } from '../../global-services/auth-management.service';
import { Router, RouterLink } from '@angular/router';
import { SessionManagementService } from '../../global-services/session-management.service';

@Component({
  selector: 'app-inside-header',
  standalone: true,
  imports: [DropdownMenuComponent, ServicesMenuComponent, RouterLink],
  templateUrl: './inside-header.component.html',
  styleUrl: './inside-header.component.css'
})
export class InsideHeaderComponent {

  constructor(private authService:AuthManagementService, private router: Router, private session:SessionManagementService){}

  logout(){
      //this.session.endSession();
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
