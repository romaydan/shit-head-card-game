import { Component, Input, OnInit } from '@angular/core';
import CardModel from 'src/app/models/CardModel';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  @Input()
  cards: CardModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
