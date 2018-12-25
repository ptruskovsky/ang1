import {Component} from '@angular/core';
import { IWidgetItem } from './data/widget-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public selectedWidgetItem: IWidgetItem; }