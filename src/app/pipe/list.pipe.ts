import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(list: any[], write: string, word: string): any {
    if(!write || !word){
      return list;
    }

    return list.filter(item=>{
      let k = item.toLowerCase();
      return k.indexOf(word)>=0;
    })
  }

}
