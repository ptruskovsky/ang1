import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { IWidgetItem, widgetItems$ } from '../data/widget-items';
import {SelectedWidgetItemService} from '../services/selected-widget-item.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit, OnDestroy {
  public items: IWidgetItem[];
  public itemsTypes: string[];
  public basicSubscription: Subscription;
  public widgetItemType: string;

  constructor(private _selectedWidgetItemService: SelectedWidgetItemService) { }

  private getItemsTypes(items: IWidgetItem[]): string[] {
    const result: string[] = [];
    items.forEach((item: IWidgetItem) => {
      if (!result.includes(item.type)) {
        result.push(item.type);
      }
    });
    return result;
  }

  ngOnInit() {
    this.basicSubscription = widgetItems$.subscribe(x => {
      this.items = x;
      this.itemsTypes = this.getItemsTypes(x);
      if (x.length > 0) {
        const first: IWidgetItem = this.items[0];
        this.widgetItemType = first.type;
        this.nextSelectedWidgetItem(first);
      }
    });
}

  ngOnDestroy(): void {
    this.basicSubscription.unsubscribe();
  }

  // when clicking on item
  public nextSelectedWidgetItem(item: IWidgetItem): void {
    this._selectedWidgetItemService.nextSelectedWidgetItem$$.next(item);
  }
  // when clicking on type link
  public changeWidgetItemType(selectedType: string): void {
    if (!selectedType) {
      return;
    }
    this.widgetItemType = selectedType;
    // refresh subscribers
    if (this.items) {
      const typedItems: IWidgetItem[] = this.items.filter(x => x.type.toLowerCase() === selectedType.toLowerCase());
      if (typedItems.length > 0) {
        this.nextSelectedWidgetItem(typedItems[0]);
      }
    }
  }

}
