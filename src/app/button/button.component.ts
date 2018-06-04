import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  private idInfo: number;

  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //this.idInfo = this.routerInfo.snapshot.queryParams["id"];
    //this.idInfo = this.routerInfo.snapshot.params["id"];
    this.routerInfo.params.subscribe((params: Params)=>{
      this.idInfo = params['id'];
    })
  }

}
