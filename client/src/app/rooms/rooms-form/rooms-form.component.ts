import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../shared/room";
import {RoomService} from "../shared/room.service";

@Component({
    selector: 'app-rooms-form',
    templateUrl: './rooms-form.component.html',
    styleUrls: ['./rooms-form.component.css']
})
export class RoomsFormComponent implements OnInit {

    @Input()
    room?: Room;

    @Output()
    save = new EventEmitter<Room>()
    @Output()
    cancel = new EventEmitter<void>()

    constructor() {
    }

    onSubmit() {
        this.save.emit(this.room);
    }

    onCancel() {
        this.cancel.emit();
    }

    ngOnInit(): void {
    }

}
