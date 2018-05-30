import { Component } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = '#f00';
  value = '';
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
}