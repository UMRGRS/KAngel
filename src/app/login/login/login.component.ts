import { Component} from '@angular/core';
import { HeaderComponent } from '../../global_components/header/header.component';
import { LoginFormComponent } from "../login-form/login-form.component";
import { AuthManagementService } from '../../global-services/auth-management.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(private authService:AuthManagementService){}

}
