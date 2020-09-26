import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CardModel from 'src/app/models/CardModel';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  @Input()
  currentCard: CardModel;
  @Output()
  takeCards: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  takeCardsClick() {
    this.takeCards.emit();
  }
}
