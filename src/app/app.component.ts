import { Component } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = '#f00';
  value = '';
  constructor(private router: Router){

  }
  nodes = [
    new NzTreeNode({
      title   : 'root1',
      key     : '1001',
      children: []
    }),
    new NzTreeNode({
      title   : 'root2',
      key     : '1002',
      children: []
    }),
    new NzTreeNode({
      title: 'root3',
      key  : '1003'
    })
  ];
  data = [
    {
      txt:'Racing car sprays burning fuel into crowd.',
      color:'#f00'
    },
    {
      txt:'Racing car sprays burning fuel into crowd.',
      color:'blue'
    },
    {
      txt:'Racing car sprays burning fuel into crowd.',
      color:'green'
    },
    {
      txt:'Racing car sprays burning fuel into crowd.',
      color:'yellow'
    },
    {
      txt:'Racing car sprays burning fuel into crowd.',
      color:'pink'
    }
  ];
  mouseAction(name: string, e: NzFormatEmitEvent): void {
    console.log(e);
    if (name === 'expand') {
      setTimeout(_ => {
        if (e.node.getChildren().length === 0 && e.node.isExpanded) {
          e.node.addChildren([
            {
              title: 'childAdd-1',
              key  : '10031-' + (new Date()).getTime()
            },
            {
              title : 'childAdd-2',
              key   : '10032-' + (new Date()).getTime(),
              isLeaf: true
            } ]);
        }
      }, 1000);
    }
  }
  toLink(){
    this.router.navigate(['/button' ,3]);
  }
}