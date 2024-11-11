import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MachinesListComponent } from './machines-list/machines-list/machines-list.component';
import { MachineDetailComponent } from './machine-detail/machine-detail/machine-detail.component';
import { RouteGuardService } from './global-services/route-guard.service';
import { RouteGuardLoginService } from './global-services/route-guard-login.service';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login page',
        canActivate:[RouteGuardLoginService]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile page',
        canActivate: [RouteGuardService]
    },
    {
        path: 'machines',
        component: MachinesListComponent,
        title: 'Machines page',
        canActivate: [RouteGuardService]
    },
    {
        path: 'machine-detail/:id',
        component: MachineDetailComponent,
        title: 'Machine detail',
        canActivate: [RouteGuardService]
    }
];
