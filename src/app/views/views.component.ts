import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  private view:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  isView(){
    return this.view;
  }
}
