import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectedWidgetItemService} from '../services/selected-widget-item.service';
import {Subscription} from 'rxjs';
import {IWidgetItem} from '../data/widget-items';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit, OnDestroy {
  private selectedWidgetItemSubscription: Subscription;
  public widgetItem: IWidgetItem;

  constructor(private selectedWidgetItem: SelectedWidgetItemService) { }

  ngOnInit() {
    this.selectedWidgetItemSubscription =
        this.selectedWidgetItem.nextSelectedWidgetItem$$.subscribe((x: IWidgetItem) => this.widgetItem = x );
  }

  ngOnDestroy(): void {
    this.selectedWidgetItemSubscription.unsubscribe();
  }

}
