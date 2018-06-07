import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private searchFilter: FormControl = new FormControl();
  private word:string;

  constructor() { }

  ngOnInit() {
    this.searchFilter.valueChanges
        .debounceTime(500)
        .subscribe(value=>this.word = value);
  }

}
