import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import { IWidgetItem, widgetItems$ } from '../data/widget-items';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit, OnDestroy {
  public widgetItemType;
  public widgetItems$: Observable<IWidgetItem[]> = widgetItems$;
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = widgetItems$.subscribe((x: IWidgetItem[]) => this.widgetItemType = x[0].type);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
