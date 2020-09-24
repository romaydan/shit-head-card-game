import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import CardModel from 'src/app/models/CardModel';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
@Output()
drawCard:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  playerAttemptToDrawCard(){
    this.drawCard.emit();
  }

}
