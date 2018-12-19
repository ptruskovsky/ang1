import { Component } from '@angular/core';
import { IWidgetItem, widgetItems } from './data/widget-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public title = 'widget-app';
}
