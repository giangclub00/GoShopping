import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemAt'
})
export class GetItemAtIndexArrayPipe implements PipeTransform {
  transform(items: any, itemAt: string): any {
    return items[itemAt];
  }
}
