import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkTooltipLineChart'
})
export class CheckTooltipLineChartPipe implements PipeTransform {
  transform(model: any[]): any {
    let sum = 0;
    let date;
    for (const element of model) {
      date = element.name;
      sum += element.value;
    }
    if (sum === 0) {
      return {
        Date: date,
        Message: 'Data not inputted'
      };
    }
    return '';
  }
}
