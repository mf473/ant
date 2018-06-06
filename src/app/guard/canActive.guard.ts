import {CanActivate} from "@angular/router";
import { TemplateBindingParseResult } from "@angular/compiler";
export class power implements CanActivate{
    canActivate(){
        var powerActive:boolean = Math.random()>0.5;
        if(!powerActive){
            console.log('无权访问');    
        }
        return powerActive;
    }
}