import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  private sessionKey:string = "user_session";

  setSession(sessionData:UserInterface): void{
    localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
  }

  getSession():UserInterface | null{
    const session = localStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session):null;
  }
  
  endSession():void{
    localStorage.removeItem(this.sessionKey);
  }

  isAuthenticated():boolean{
    return !!this.getSession();
  }
}
