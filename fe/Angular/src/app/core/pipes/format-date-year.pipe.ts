import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateYear'
})
export class FormatDateYearPipe implements PipeTransform {
  transform(date: string): any {
    return date.slice(date.lastIndexOf('-') + 1);
  }
}
