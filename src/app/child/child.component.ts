import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { userInfo } from 'os';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }

  oldVal: string;
  changeVal: boolean;
  changeNum: number = 0;

  @Input()
  greet: string;

  @Input()
  user: { name: string };

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(JSON.stringify(change, null, 2));
    console.log(change);
  }

  ngDoCheck() {
    if (this.user.name !== this.oldVal) {
      this.changeVal = true;
    } else {
      this.changeVal = false;
    }
    if (this.changeVal) {
      console.log(`user.name从${this.oldVal}变成了${this.user.name}`);
      this.oldVal = this.user.name;
      this.changeNum++;
      console.log(`DoCheck有效触发了${this.changeNum}次`);
    }
  }
}
