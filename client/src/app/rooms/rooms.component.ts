import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Room} from "./shared/room";
import {RoomService} from "./shared/room.service";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


    rooms: Room[];
    currentRoom?: Room;

    constructor(private roomService: RoomService) {
    }

    ngOnInit() {
        this.reloadList();
    }

    private reloadList() {
        this.roomService.listAllRooms().subscribe(rooms => this.rooms = rooms);
        this.currentRoom = undefined;
    }

    onDeleteRoom(roomToBeDeleted: Room) {
        this.roomService.deleteRoom(roomToBeDeleted).subscribe( _ => this.reloadList());
    }

    onAddRoom() {
        this.currentRoom = new Room();
    }

    onEditRoom(room: Room) {
        this.currentRoom = room;
    }

    onSave(roomToBeSaved: Room) {
        this.roomService.saveRoom(roomToBeSaved).subscribe(_ => this.reloadList());
    }

    onCancel() {
        this.reloadList();
    }

}
