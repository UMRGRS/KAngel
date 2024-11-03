import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MachinesListComponent } from './machines-list/machines-list/machines-list.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        title: "Login page"
    },
    {
        path: "profile",
        component: ProfileComponent,
        title: "Profile page"
    },
    {
        path: "machines",
        component: MachinesListComponent,
        title: "Machines page"
    }
];
