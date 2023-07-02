import { Pipe, PipeTransform } from '@angular/core';
import { StatsLineItemUIModel } from 'src/modules/common/models/model';

@Pipe({
  name: 'getNoOfEquiment'
})
export class GetNoOfEquimentPipe implements PipeTransform {
  transform(items: StatsLineItemUIModel[], name?: string, time?: string): any {
    return items.find(x => x.name === name).series.find(x => x.name === time).NoOfEquiment;
  }
}
