import { Component } from '@angular/core';
import { HeaderComponent } from "../../global/header/header.component";
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
