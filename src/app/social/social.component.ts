import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IWidgetItem} from '../data/widget-items';
import {SelectedWidgetItemService} from '../services/selected-widget-item.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit, OnDestroy {
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
