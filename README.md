# Angular Roommanagement

In dieser Übung wollen wir unsere NAK Raumverwaltung mit Hilfe von Angular umsetzen. 
Das Prinzip ist dabei das gleiche wie in der Struts Aufgabe. Wir verwalten Räume, die wir zu Beginn
tabellarisch darstellen wollen. Durch unterschiedliche Buttons (*Erstellen*, *Bearbeiten*, *Löschen*) springen wir, wenn nötig,
in die einzelnen Masken. 


## Aufbau und Vorbereitung

Schaut euch die Ordnerstruktur des Projektes an. Wir haben einen Ordner auf der höchsten Ebene mit dem Namen `client`. Dieser enthält unseren
Angular Quellcode. Darin befindet sich unter anderem der `src`-Ordner mit einem Angular *root*-Module.

Wir wollen unsere Verwaltung der Raummaske in unterschiedliche Komponenten aufteilen. 

    Die spätere Struktur soll dabei wie folgt aussehen: 

- `app`-Modul (root)
  - `rooms`-Component 
    - `room-list`-Component (Tabellarische Anzeige der Räume)
    - `room-form`-Component (Komponente zur Bearbeitung/Erstellung eines Raums) 


**1.** Überprüft, welche dieser Module/Komponenten bereits vorhanden sind und welche noch fehlen. 

**2.** Was macht der Ordner `shared` innerhalb unserer Angular Anwendung? Wofür könnte er 
nützlich sein?

**3.** Startet die Anwendung mit dem Befehl `ng serve`.

Bedenket, dass ihr wohlmöglich die Abhängigkeiten noch nicht installiert habt. Sollte dies der Fall sein, holt dies mit dem Befehl
`npm install` nun nach. 

## Initiales Laden der Räume

Damit wir überhaupt Räume angezeigt bekommen, müssen wir die Räume, welche angezeigt werden sollen, laden und die oben genannten `room-list`-Komponenten implementieren.

Wir wollen die bereits existierende `rooms`-Komponente verwenden um die Liste der Räume zu halten und als "Vermittler" zwischen den Subkomponenten
`room-list` und `room-form` zu agieren. 
 

**1.** Fügt der `rooms.component.ts` eine public property mit dem Namen und dem Typ `rooms: Room[];` hinzu.

Hier werden wir unsere Liste von Räumen halten, die nachfolgend angezeigt und bearbeitet werden können.  

**2.** erzeugt den nachfolgenden Konstruktor: `constructor(private roomService: RoomService) {}`. 
                                                        
Dieser Konstruktor übermittelt uns beim Erzeugen der Komponenten den RoomService, von welchem wir die Daten beziehen können. 

Was macht eigentlich das Wort `private` innerhalb der Parameter? 

**3.** Implementiert die Methode `private reloadList()`. 

Wir wollen mit dieser Methode an einer zentralen Stelle innerhalb der Komponente den `roomService` nach der Liste aller Räume fragen und diese nachfolgend
in unsere `rooms`-Variable übernehmen. 

*Tipp:* Ihr erreicht den `roomService` über `this`. Da die Methode `listAllRooms()` ein Observable zurückgibt, können wir mit der 
Methode `subscribe((rooms: Room[]) => {})` auf das Ergebnis der Methode zugreife, wenn es verfügbar ist.

*Pro-Tipp:* Arrow-Functions! 

Sowohl das Service- als auch das Observable-Konstrukt haben wir noch nicht detailliert besprochen, werden aber 
noch in der kommenden Vorlesung darauf eingehen.

Nun sollte automatisch über die Methode `ngOnInit()` unsere `rooms`-Variable mit Räumen gefüllt sein. Nur leider können
wir diese noch nicht darstellen. Das tun wie jetzt...


## Erzeugen der `room-list`-Komponente

Lasst uns die tabellarische Darstellung der Räume implementieren. Hierzu erzeugen wir eine neue Komponenten.

**1.** Navigiert mithilfe des Terminals zum Pfad `client/src/app/rooms` 

**2.** Nutzt `ng create` um eine Komponente mit dem Namen `room-list` zu erzeugen. 

*Tipp*: Es bietet sich an, den CLI-Befehl `ng generate component` hierfür zu verwenden.

*Pro Tipp:* Noch kürzer geht es mit `ng g c`. 

**3.** Fügt die gerade generierte Komponente in der `rooms.component.html` hinzu. 

Sehr wahrscheinlich ist der selector für Ihre Komponente `app-room-list`, d.h. Sie können in der HTML einfach folgendes einfügen: 

````html 
<app-room-list></app-room-list>
````

**4.** Startet die Anwendung wieder und schaut, ob ihr `room-list works!` seht. Sollte dies nicht der Fall sein, scheint irgendetwas schiefgelaufen
zu sein. 


### Implementieren der Logik für die `room-list`-Komponente

Unsere Komponente soll eine Liste von Räumen darstellen. Bevor wir uns um die Darstellung kümmern, wollen wir sicherstellen, dass zumindest unsere UI-Logik
bereits vorhanden ist. 

Wir befinden uns nun also in der `room-list.component.ts`. Damit unsere Komponente mit Räumen umgehen kann, benötigen wir wieder eine Variable
die eine Liste von Räumen hält. 

**1.** Fügt die public property `rooms: Room[] = [];` unserer Implementation hinzu. 

Wir wollen nun die besagten Räume nicht nochmal laden, denn unsere übergeordnete Komponente, `rooms`, lädt diese Räume ja bereits. Stattdessen 
wollen wir die Liste der Räume als `Input` für unsere Komponente definieren. 

**2.** Setzt den `Input`-Decorator für `rooms` ein. 

Wir können nun unserer Komponente eine Liste von Räumen mitgeben, die sie anzeigen soll. 
Dieses neue Attribut ziehen wir am besten direkt in der `rooms.component.html` nach. 

**3.** Fügt `[rooms]="rooms"` unseres `app-room-list`-Tags hinzu.
 
### Entwickeln der View für die `room-list`-Komponente

Nun haben wir zwar die Daten aber wir können sie noch immer nicht darstellen. Diesem "Problem" widmen wir uns jetzt. 

**1.** Öffnet die Datei, welche für die View unserer Komponenten zuständig ist.

*Tipp:* Die Datei heißt sicher irgendwas mit `room-list` und endet auf `.html`. 
Hier finden wir auch unser bekanntes `room-list works!` wieder. 

**2.** Implementiert nun eine Tabelle, die als Tabellenkopf wieder unsere bekannten Felder enthält: 

- Building
- Room Number
- Seats
- Projector present? 

**3.** In der darauffolgenden Tabellenzeile solltet ihr die entsprechenden Eigenschaften der Räume ausgeben.

Beginnt am einfachsten mit einer Zeile `<tr>` die als Zelle `<td>` das jeweilige Attribut zur Spalte als *String interpolation* ausgibt. 

*Tipp:* Das würde für *Building* wie folgt aussehen: `<td>{{room.building}}</td>`.

**4.** Iteriert mit Hilfe der Direktive `*ngFor` im `<tr>`-Tag über die Liste unserer Räume. 

Erzeugt hierzu eine Laufvariable `room` wie in den Vorlesungsfolien gezeigt. 

**5.** Testet die Anwendung. Ihr solltet nun eine Liste von Räumen sehen. 


## Die erste *CRUD*-Funktionalität

Wir wollen nun noch die einfachste aller *CRUD*-Funktionalitäten entwickeln, nämlich das *Delete*. 

### Erweitern der UI mit einem Delete-Button

Lasst uns den ersten Button hinzufügen, welcher es uns ermöglicht, einen Raum zu löschen. 
Leider müssen wir hierzu noch etwas anderes vorbereiten, denn wir können aktuell noch keinen Raum auswählen. 

Beginnen wir also mit der Auswahl eines Datensatzes.

#### Auswahl eines Raumes in der Liste

**1.** Erstellt in `room-list.component.ts` eine public property mit dessen Hilfe wir einen ausgewählten Raum speichern können.

Weil der Raum nicht immer ausgewählt ist, kann die property wie folgt aussehen `selectedRoom?: Room;`

**2.** Erstellt die nachfolgende Methode 
````typescript
 onSelect(room: Room) {
        this.selectedRoom = room;
    }
````

Diese Methode können wir vom UI aufrufen, um einen Raum zu selektieren. 

**3.** Fügt in `room-list.component.html` in unserer `<tr>`-Zeile einen Event-Listener für `click` ein. 

Einen Klick auf die Tabellenzeile soll den darin enthaltenen Raum an die `onSelect(room: Room)`-Methode übergeben. 

*Tipp:* Es handelt sich um ein *event binding*. 

**4.** Fügt der `<tr>` Zeile noch das folgende property binding hinzu `[class.selected]="room === selectedRoom"`. 

Überlegt mal, was diese Zeile wohl bedeutet. 

**5.** Macht die Auswahl hübsch. 

Hierzu passen wir die `room-list.component.css` an und fügen beispielsweise nachfolgenden CSS-Code ein, damit unsere Tabellenzeile bei Auswahl
blau hinterlegt ist: 

````css
.selected {
    background-color: lightblue;
}
````

### Die Delete-Funktionalität in der `room-list`-Komponente

Nun wollen wir unserer Komponente noch das Löschen beibringen.
Erinnert euch daran, dass die `room-list` zwar die Räume zum Anzeigen benötigt, diese aber eigentlich von der `rooms`-Komponente bekommt. Wir sollten daher gelöschte 
Räume auch wieder an die `rooms`-Komponente weiterleiten. 

**1.** Erstellt in `room-list.component.ts` eine property mit dem Namen `delete` und initialisiert die Variable mit `new EventEmitter<Room>();`

**2.** Fügt den `Output`-Decorator hinzu, damit wir später auf dieses Event hören können. 

Eine andere Komponente kann sich nun bei uns "registrieren" und auf gelöschte Räume reagieren. Das ist sehr zweckdienlich, da wir so die `rooms`-Komponente  
anmelden können und diese dann nachfolgend den Raum "wirklich" löschen kann. 
 
**3.** Erstellt eine neue Methode mit folgendem Inhalt: 

```typescript
  onDelete() {
         this.delete.emit(this.selectedRoom);
     }
```

Diese Methode wollen wir aus dem UI aufrufen, wenn ein Nutzer auf unseren `Delete`-Button klickt. 

**4.** Fügt der `room-list.component.html` den folgenden Button hinzu: 

````html
<button (click)="onDelete()" [disabled]="!selectedRoom">Delete</button>
````

Überlegt, was wohl das property binding `disabled` an dieser Stelle tut. 


### Erweitern der `rooms`-Komponenten

Unsere `room-list`-Komponente hat nun alles, was sie zum Löschen eines Raumes benötigt. Nun müssen wir noch den Raum aus der `rooms`-Komponente löschen.

**1.** Erzeugt in `rooms.component.ts` die Methode `onDeleteRoom(roomToBeDeleted: Room)` und implementiert diese. 

Wir wollen in der Implementation den übergebenen Raum an den `roomService` und dessen Methode `deleteRoom(room: Room): Observable<any>` weiterleiten. 
Sobald das Observable etwas zurückmeldet, aktualisieren wir die Liste der Räume mit einem Aufruf von `this.reloadList()`. 

**2.** Fügt der `rooms.component.html` das event binding für unsere *Delete*-Funktion hinzu. 

*Tipp:* Wir haben den Output-Decorator `delete` genannt und die aufzurufende Methode eben `onDeleteRoom`. Daraus ergibt sich das folgendes event binding für unsere 
`<app-room-list>` : `(delete)="onDeleteRoom($event)`. 

Nun sollte auch das Delete funktionieren.

# Testen testen testen

Testet die Anwendung. Wie bekommen ihr wohl die Räume wieder, wenn ihr alle gelöscht habt?  

 
                                                     
