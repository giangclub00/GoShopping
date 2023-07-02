import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortByAsc'
})
export class SortByAscPipe implements PipeTransform {
  transform(arrays: any[], key): any {
    if (!arrays || arrays.length > 0) {
      return arrays;
    }
    return _.sortBy(arrays, [x => x[key]]);
  }
}
