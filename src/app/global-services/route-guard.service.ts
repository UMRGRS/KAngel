import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagementService } from './session-management.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private sessionService:SessionManagementService, private router:Router) { }

  canActivate():boolean{
    if(this.sessionService.isAuthenticated()){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
