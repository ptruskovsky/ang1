import { Pipe, PipeTransform } from '@angular/core';
import { IWidgetItem } from '../data/widget-items';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(items: IWidgetItem[]): string[] {
    const resultTypes: string[] = [];

    items.forEach((item: IWidgetItem) => {
      if (!resultTypes.includes(item.type)) {
        resultTypes.push(item.type);
      }
    });
    return resultTypes;
  }
}
