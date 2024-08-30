import { Player } from './../player-list/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList: Player[] = [
  new Player(1, "Yosra Besbes", "Manchester", "Norway", 30),
    new Player(2, "Harry Kane", "Tottenham", "England", 20),
    new Player(3, "Unknown Player", "Unknown Team", "Unknown Country", 30),
    new Player(4, "Unknown Player", "Unknown Team", "Unknown Country", 30)

]

  constructor() { }

  ngOnInit(): void {
  }

}
