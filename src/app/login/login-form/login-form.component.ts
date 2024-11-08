import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthManagementService } from '../../global-services/auth-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(private authService:AuthManagementService, private router: Router){}

  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.username!, this.loginForm.value.password!).subscribe({
        next: (response) => {
          if(response.error==null){
            this.router.navigate(['profile'])
          }
          //Add error message
        },
      });
    }
  }
}
