import {Component, Input} from '@angular/core';
import {IWidgetItem} from '../data/widget-items';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent  {
  @Input()
  public widgetItem: IWidgetItem;}
