import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWidgetItem, widgetItems$ } from '../data/widget-items';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public widgetItems$: Observable<IWidgetItem[]> = widgetItems$;
  constructor() { }

  ngOnInit() {
  }

}
