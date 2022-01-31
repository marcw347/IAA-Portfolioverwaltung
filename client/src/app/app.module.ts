import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {LoginComponent} from './login/login.component';



import {StartseitenDialogComponent} from "./startseiten-dialog/startseiten-dialog.component";

import {LogOffDialogComponent} from "./log-off-dialog/log-off-dialog.component";
import {CreatePortfolioDialogComponent} from "./create-portfolio-dialog/create-portfolio.component";
import {BuyStockDialogComponent} from "./buy-stock-dialog/buy-stock-dialog.component";
import {SellStockDialogComponent} from "./sell-stock-dialog/sell-stock-dialog.component";
import {MoveStockDialogComponent} from "./move-stock-dialog/move-stock-dialog.component";

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
    declarations: [
        AppComponent,

        RegisterComponent,

        LoginComponent,

        StartseitenDialogComponent,

        LogOffDialogComponent,
        CreatePortfolioDialogComponent,
        BuyStockDialogComponent,
        SellStockDialogComponent,
        MoveStockDialogComponent,
        RegisterComponent,
        HomeComponent,
        AlertComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
