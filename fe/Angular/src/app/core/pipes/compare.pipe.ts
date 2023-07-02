import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'is'
})
export class EqualsPipe implements PipeTransform {
  transform(item: any, compareTo: any): any {
    return item === compareTo;
  }
}
