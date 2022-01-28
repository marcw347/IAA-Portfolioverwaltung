import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';


import { RegistrationDialogComponent} from "./registration-dialog/registration-dialog.component";

import {LogInDialogComponent} from "./log-in-dialog/log-in-dialog.component";
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';

import {StartseitenDialogComponent} from "./startseiten-dialog/startseiten-dialog.component";

import {LogOffDialogComponent} from "./log-off-dialog/log-off-dialog.component";
import {CreatePortfolioDialogComponent} from "./create-portfolio-dialog/create-portfolio.component";
import {BuyStockDialogComponent} from "./buy-stock-dialog/buy-stock-dialog.component";
import {SellStockDialogComponent} from "./sell-stock-dialog/sell-stock-dialog.component";
import {MoveStockDialogComponent} from "./move-stock-dialog/move-stock-dialog.component";
import { ManagementComponent } from './management/management/management.component';
import { AlertComponent } from './directives/alert/alert.component';


@NgModule({
    declarations: [
        AppComponent,

        RegistrationDialogComponent,

        LogInDialogComponent,

        StartseitenDialogComponent,

        LogOffDialogComponent,
        CreatePortfolioDialogComponent,
        BuyStockDialogComponent,
        SellStockDialogComponent,
        MoveStockDialogComponent,
        ManagementComponent,
        AlertComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        routing
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
    bootstrap: [AppComponent]
})
export class AppModule {
}
