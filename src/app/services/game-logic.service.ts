import { Injectable } from '@angular/core';
import CardModel from '../models/CardModel';
import Player from '../models/Player';
import { PlayingCardService } from './playing-card.service';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  playerTurn: boolean = true;
  player1: Player;
  player2: Player;

  constructor(private cardService: PlayingCardService) {
    this.player1 = new Player('romes');
    this.player2 = new Player('rofes');
    this.startGame(); //tbd move to button
  }
  startGame() {
    for (let index = 0; index < 3; index++) {
      this.drawCard(this.player1.hiddenCards, true);
      this.drawCard(this.player2.hiddenCards, true);
    }
    for (let index = 0; index < 3; index++) {
      this.drawCard(this.player1.TopCards, false);
      this.drawCard(this.player2.TopCards, false);
    }

  }
  private drawCard(playerDeck: CardModel[], isHidden: boolean) {
    this.cardService.DrawCardFromDeck(playerDeck, isHidden);

  }
  playerdrawCard() {
    if (this.playerTurn )
    if(this.player1.HandsCards.length<3)
      this.drawCard(this.player1.HandsCards, false)
    else if(this.player2.HandsCards.length<3) {
      this.drawCard(this.player2.HandsCards, false);
    }
  }
}
