import { Component, OnInit } from '@angular/core';
import CardModel from 'src/app/models/CardModel';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  card:CardModel
  constructor(public gameLogic:GameLogicService) { }

  ngOnInit(): void {
    this.card = new CardModel('Diamonds','J');
  }
  drawCard(test:any){
    this.gameLogic.playerdrawCard();
  }

}
