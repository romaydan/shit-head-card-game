import { Injectable } from '@angular/core';
import CardModel from '../models/CardModel';

@Injectable({
  providedIn: 'root'
})
export class PlayingCardService {
  // private static instance: CardService;
  CardSuits: string[] = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
  CardTypes: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  deck: CardModel[] = [];


  constructor() {
      this.InitiateCards();
  }

  InitiateCards() {
      this.CardSuits.forEach(suit => {
          this.CardTypes.forEach(type => {
              this.deck.push(new CardModel(suit, type));
          })
      })
      this.ShuffleCards();
  }
  GetCards() {
      return this.deck;
  }
  ShuffleCards() {
      for (let i = this.deck.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * i);
          let temp = this.deck[i];
          this.deck[i] = this.deck[j];
          this.deck[j] = temp;
      }
  }
  DrawCardFromDeck(playerDeck:CardModel[],isHidden: boolean) {
      if (this.deck.length > 0) {
          let drawCard= this.deck.shift();
          if (drawCard) {
              drawCard.isHidden = isHidden;
              return playerDeck.push(drawCard as CardModel);
          }
      }
      throw new Error("Deck Is Empty");
      ;
  }
}
