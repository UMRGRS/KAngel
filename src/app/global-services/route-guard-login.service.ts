import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagementService } from './session-management.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardLoginService {

  constructor(private sessionService:SessionManagementService, private router:Router) { }

  canActivate():boolean{
    if(this.sessionService.isAuthenticated()){
      this.router.navigate(['/profile']);
      return false;
    }
    else {
      return true;
    }
  }
}
