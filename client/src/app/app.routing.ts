import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from "./login/login.component";
import {ManagementComponent} from './management/management/management.component';
import {RegisterComponent} from './register/register.component';


const appRoutes: Routes = [
    { path: '', component: ManagementComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
