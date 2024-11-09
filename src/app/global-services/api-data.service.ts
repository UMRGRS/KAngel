import { Injectable } from '@angular/core';
import { SessionManagementService } from './session-management.service';
import { environment } from '../../environments/environment';
import { UserInterface } from '../interfaces/user-interface';
import { Profile } from '../interfaces/profile-data';
import { MachineList } from '../interfaces/machine-list';
import { MachineResume } from '../interfaces/machine-resume';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private apiURL = environment.apiURL;
  private authURL = environment.authURL;
  private machineURL = environment.machinesURL;

  constructor(private http:HttpClient, private sessionService:SessionManagementService) { }

  getProfileData():Observable<Profile>{
    return new Observable<Profile>((observer) => {
      this.profileDataAPICall().subscribe({
        // On successful logout, handle session
        next: (data) => {
          observer.next({ 
            error: null, id:data['id'], 
            username:data['username'],
            company:{
              id:data['company']['id'],
              name:data['company']['name'],
              email:data['company']['email'],
              phone:data['company']['phone'],
              logo_url:data['company']['logo_url'],
            }
          });
          observer.complete();
        },
        // On error
        error: (error) => {
          observer.next({ error: error});
          observer.complete();
        },
      });
    });
  }

  getMachinesList():Observable<MachineList>{
    return new Observable<MachineList>((observer) => {
      this.machinesListAPICall().subscribe({

        next: (data) => {
          var machines = [];
          for(let i=0; i < data['results'].length; i++){
            let newMachine:MachineResume = {
              id:data['results'][i]['identifier'],
              machine:data['results'][i]['machine'],
              area:data['results'][i]['area'],
            }
            machines.push(newMachine);
          }
          observer.next({ 
            error: null,
            next:data['next'],
            previous:data['next'],
            results:machines
          });
          observer.complete();
        },
        // On error
        error: (error) => {
          observer.next({ error: error});
          observer.complete();
        },
      });
    });
  }

  private profileDataAPICall(){
    let session:UserInterface | null = this.sessionService.getSession();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + session?.token,
      "ngrok-skip-browser-warning": "69420",
    });
    return this.http.get<any>(`${this.apiURL}${this.authURL}user/`, { headers });
  }

  private machinesListAPICall(){
    let session:UserInterface | null = this.sessionService.getSession();

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + session?.token,
      "ngrok-skip-browser-warning": "69420",
    });
    return this.http.get<any>(`${this.apiURL}${this.machineURL}machines`, { headers });
  } 
}
