import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pivotTable'
})
export class PivotObjectPipe implements PipeTransform {
  transform(items: any[], propertyName: string): any {
    if (!propertyName) {
      return [];
    }

    return items.map(x => x[propertyName]);
  }
}
