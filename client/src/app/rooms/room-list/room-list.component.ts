import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Room} from "../shared/room";

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

    @Input()
    rooms: Room[];

    @Output()
    delete = new EventEmitter<Room>();

    selectedRoom?: Room;

    constructor() {
    }

    onSelect(room: Room) {
        this.selectedRoom = room;
    }

    onDelete() {
        this.delete.emit(this.selectedRoom);
    }

}
