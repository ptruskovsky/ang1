import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {IWidgetItem} from '../data/widget-items';

@Injectable({
  providedIn: 'root'
})
export class SelectedWidgetItemService {

  constructor() { }
  public nextSelectedWidgetItem$$: Subject<IWidgetItem> = new Subject();

}
