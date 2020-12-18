import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsFormComponent } from './rooms/rooms-form/rooms-form.component';
import { MinValidatorDirective } from './rooms/shared/min-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomListComponent,
        RoomsFormComponent,
        MinValidatorDirective,
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
