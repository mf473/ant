import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../sent-data/sent-data.component';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {

  @Input()
  private takeChild: Mine;


  constructor() { }

  ngOnInit() {
  }

}
