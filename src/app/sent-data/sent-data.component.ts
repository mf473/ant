import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sent-data',
  templateUrl: './sent-data.component.html',
  styleUrls: ['./sent-data.component.css']
})
export class SentDataComponent implements OnInit {

  @Input()
  private getFather: string;

  private n: number;

  @Output()
  private mine: EventEmitter<Mine> = new EventEmitter();

  @Output()
  private currentN: EventEmitter<Mine> = new EventEmitter();


  constructor() { }

  takeNum() {
    this.currentN.emit(new Mine(this.n));
  }

  ngOnInit() {
    setInterval(() => {
      const my: Mine = new Mine(100 * Math.random());
      this.mine.emit(my);
      this.n = my.num;
    }, 2000)
  }

}

export class Mine {
  constructor(public num: number) {

  }
}