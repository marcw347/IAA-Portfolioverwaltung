import {Injectable} from '@angular/core';
import {Room} from './room';
import {Observable, timer} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {filter, switchMap} from "rxjs/operators";

const ROOMS_ENDPOINT = '/rest/rooms';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private httpClient: HttpClient) {
    }

    listAllRooms(): Observable<Room[]> {
        return timer(0, 3 * 1000)
            .pipe(
                switchMap(() => this.httpClient.get<Room[]>(ROOMS_ENDPOINT))
            );
    }

    saveRoom(roomToBeSaved: Room): Observable<any> {
        return this.httpClient.put(ROOMS_ENDPOINT, roomToBeSaved);
    }

    deleteRoom(roomToBeDeleted: Room): Observable<any> {
        return this.httpClient.delete(`${ROOMS_ENDPOINT}/${roomToBeDeleted.building}-${roomToBeDeleted.roomNumber}`);
    }

}
