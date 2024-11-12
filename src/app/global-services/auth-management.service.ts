import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../interfaces/login-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionManagementService } from './session-management.service';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {
  private apiURL = environment.apiURL;
  private authURL = environment.authURL;

  constructor(private http: HttpClient, private sessionService:SessionManagementService) {}

  login(username: string, password: string): Observable<LoginResponse> {
    // Create an Observable for the response
    return new Observable<LoginResponse>((observer) => {
      this.callLoginAPI(username, password).subscribe({
        // On successful login, handle session
        next: (data) => {
          this.sessionService.setSession({ expiry: data["expiry"], token: data["token"] });
          observer.next({ error: null, message: 'Login successful' });
          observer.complete();
        },
        // On error
        error: (error) => {
          observer.next({ error: error, message: 'Something went wrong'});
          observer.complete();
        },
      });
    });
  }

  logout(): Observable<LoginResponse>{
    return new Observable<LoginResponse>((observer) => {
      this.callLogoutAPI().subscribe({
        // On successful logout, handle session
        next: (data) => {
          this.sessionService.endSession();
          observer.next({ error: null, message: 'Logout successful' });
          observer.complete();
        },
        // On error
        error: (error) => {
          observer.next({ error: error, message: 'Something went wrong'});
          observer.complete();
        },
      });
    });
  }

  private callLoginAPI(username:string, password:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });
    return this.http.post<any>(`${this.apiURL}${this.authURL}login/`, {}, { headers });
  }

  private callLogoutAPI():Observable<any>{
    let session:UserInterface | null = this.sessionService.getSession();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session?.token,
    });
    return this.http.post<any>(`${this.apiURL}${this.authURL}logout/`, {}, { headers });
  }
}
