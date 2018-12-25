import {Component, Input} from '@angular/core';
import {IWidgetItem} from '../data/widget-items';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input()
  public widgetItem: IWidgetItem; }
