import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  private idInfo: number;
  private onOff: Boolean;

  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //this.idInfo = this.routerInfo.snapshot.queryParams["id"];
    //this.idInfo = this.routerInfo.snapshot.params["id"];
    this.routerInfo.params.subscribe((params: Params)=>{
      this.idInfo = params['id'];
    });
      
    this.onOff = this.routerInfo.snapshot.data[0].onOff;
  }

}
