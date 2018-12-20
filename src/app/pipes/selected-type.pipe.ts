import { Pipe, PipeTransform } from '@angular/core';
import {IWidgetItem} from '../data/widget-items';

@Pipe({
  name: 'selectedType'
})
export class SelectedTypePipe implements PipeTransform {

  transform(widgetItems: IWidgetItem[], selectedType: string): IWidgetItem[] {
    if (!selectedType) {
      return widgetItems;
    }
     return widgetItems.filter((x: IWidgetItem) => {
       return x.type.toLowerCase() === selectedType.toLowerCase();
     });
  }

}
