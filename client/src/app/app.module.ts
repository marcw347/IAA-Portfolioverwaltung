import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { RegistrationDialogComponent} from "./registration-dialog/registration-dialog.component";

import {LogInDialogComponent} from "./log-in-dialog/log-in-dialog.component";

import {StartseitenDialogComponent} from "./startseiten-dialog/startseiten-dialog.component";

import {LogOffDialogComponent} from "./log-off-dialog/log-off-dialog.component";
import {CreatePortfolioDialogComponent} from "./create-portfolio-dialog/create-portfolio.component";
import {BuyStockDialogComponent} from "./buy-stock-dialog/buy-stock-dialog.component";
import {SellStockDialogComponent} from "./sell-stock-dialog/sell-stock-dialog.component";
import {MoveStockDialogComponent} from "./move-stock-dialog/move-stock-dialog.component";


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
