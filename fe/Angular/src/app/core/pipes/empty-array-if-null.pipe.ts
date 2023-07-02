import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'emptyArrayIfNull' })
export class EmptyArrayIfNullPipe implements PipeTransform {
  transform(listItem) {
    return listItem || [];
  }
}
