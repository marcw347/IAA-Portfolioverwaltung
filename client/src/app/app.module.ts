import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { RegistrationDialogComponent} from "./registration-dialog/registration-dialog.component";

import {LogInDialogComponent} from "./log-in-dialog/log-in-dialog.component";

import {MenuComponent} from "./menu/menu.component";

import {LogOffDialogComponent} from "./log-off-dialog/log-off-dialog.component";


@NgModule({
    declarations: [
        AppComponent,

        RegistrationDialogComponent,

        LogInDialogComponent,

        MenuComponent,

        LogOffDialogComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
