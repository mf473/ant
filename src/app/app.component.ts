import { Component } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Mine } from './sent-data/sent-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = '#f00';
  value = '';
  routerTitle = '';
  routerDesc = '';
  menus: Array<Menu>;
  currentId: number;
  mydata: string;
  currentNum: number;
  constructor(private router: Router) {
    //console.log(router.events)
    router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      if (event.url == '/button/4') {
        this.routerTitle = '这是button4';
        this.routerDesc = '通过路由event：NavigationEnd得到';
      } else if (event.url == '/button/5') {
        this.routerTitle = '这是button5';
        this.routerDesc = '通过路由event：NavigationEnd得到';
      } else if (event.url == '/button/6') {
        this.routerTitle = '这是button6';
        this.routerDesc = '通过路由event：NavigationEnd得到';
      }
    })
  }
  ngOnInit() {
    this.menus = [
      new Menu(4, 'btn1', '/button/4'),
      new Menu(5, 'btn2', '/button/5'),
      new Menu(6, 'btn3', '/button/6')
    ]
  }
  nodes = [
    new NzTreeNode({
      title: 'root1',
      key: '1001',
      children: []
    }),
    new NzTreeNode({
      title: 'root2',
      key: '1002',
      children: []
    }),
    new NzTreeNode({
      title: 'root3',
      key: '1003'
    })
  ];
  data = [
    {
      txt: 'Racing car sprays burning fuel into crowd.',
      color: '#f00'
    },
    {
      txt: 'Racing car sprays burning fuel into crowd.',
      color: 'blue'
    },
    {
      txt: 'Racing car sprays burning fuel into crowd.',
      color: 'green'
    },
    {
      txt: 'Racing car sprays burning fuel into crowd.',
      color: 'yellow'
    },
    {
      txt: 'Racing car sprays burning fuel into crowd.',
      color: 'pink'
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
              key: '10031-' + (new Date()).getTime()
            },
            {
              title: 'childAdd-2',
              key: '10032-' + (new Date()).getTime(),
              isLeaf: true
            }]);
        }
      }, 1000);
    }
  }
  toLink() {
    this.router.navigate(['/button', 3]);
  }
  getId(menu: Menu) {
    console.log(menu.id);
    this.currentId = menu.id;
  }
  getChild(mine: Mine){
    this.currentNum = mine.num;
  }
}
export class Menu {
  constructor(public id: number, public name: string, public link: string) {

  }
}