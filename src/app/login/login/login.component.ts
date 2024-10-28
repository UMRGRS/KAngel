import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginFormComponent } from "../login-form/login-form.component";
import { HeaderComponent } from '../../global/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatGridListModule, LoginFormComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
