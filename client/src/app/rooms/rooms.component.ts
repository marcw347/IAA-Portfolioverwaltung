import {Component, OnInit} from '@angular/core';
import {Room} from "./shared/room";
import {RoomService} from "./shared/room.service";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

    rooms: Room[];

    constructor(private roomService: RoomService) {}

    ngOnInit() {
        this.reloadList();
    }

    private reloadList() {
        this.roomService.listAllRooms().subscribe(rooms => this.rooms = rooms);
    }

    onDeleteRoom(roomToBeDeleted: Room) {
        this.roomService.deleteRoom(roomToBeDeleted).subscribe(_ => this.reloadList());
    }
}
