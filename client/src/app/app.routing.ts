import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {LogInDialogComponent} from './log-in-dialog/log-in-dialog.component';
import {ManagementComponent} from './management/management/management.component';
import {RegistrationDialogComponent} from './registration-dialog/registration-dialog.component';


const appRoutes: Routes = [
    { path: '', component: ManagementComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LogInDialogComponent },
    { path: 'register', component: RegistrationDialogComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
