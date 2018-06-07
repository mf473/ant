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
  private mine:EventEmitter<Mine> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    setInterval(()=>{
        let my:Mine = new Mine(100*Math.random());
        this.mine.emit(my);
        this.n = my.num;
    },2000)
  }

}

export class Mine{
  constructor(public num: number){

  }
}