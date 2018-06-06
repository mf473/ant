import {CanDeactivate} from '@angular/router';
import { ViewsComponent } from '../views/views.component';
export class powerNo implements CanDeactivate<ViewsComponent>{
    canDeactivate(component: ViewsComponent){
        if(component.isView()){
            return true;
        }else{
            return window.confirm('关注离开后不会有弹窗出现');
        }
    }
}