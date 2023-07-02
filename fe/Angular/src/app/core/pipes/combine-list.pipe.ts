import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'combineList' })
export class CombineListPipe implements PipeTransform {
  transform(listItem: any[], totalItem: number) {
    const result = [];
    let counter = 0;
    let currentArray = [];
    for (const item of listItem) {
      if (counter === 0) {
        currentArray = [];
        result.push(currentArray);
      }

      currentArray.push(item);

      counter++;
      if (counter === totalItem) {
        counter = 0;
      }
    }

    return result;
  }
}
