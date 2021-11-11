import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsFormComponent } from './rooms/rooms-form/rooms-form.component';
import { MinValidatorDirective } from './rooms/shared/min-validator.directive';
import { RegistrationDialogComponent} from "./registration-dialog/registration-dialog.component";
import {CreateIssueComponent} from "./create-issue/create-issue.component";
import {LogInDialogComponent} from "./log-in-dialog/log-in-dialog.component";
import {BugTableComponent} from "./bug-table/bug-table.component";
import {MenuComponent} from "./menu/menu.component"
import {BugDetailledViewComponent} from "./bug-detailled-view/bug-detailled-view.component";
import {AddCommentComponent} from "./add-comment/add-comment.component";




@NgModule({
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomListComponent,
        RoomsFormComponent,
        MinValidatorDirective,
        RegistrationDialogComponent,
        CreateIssueComponent,
        LogInDialogComponent,
        BugTableComponent,
        MenuComponent,
        BugDetailledViewComponent,
        AddCommentComponent,

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
