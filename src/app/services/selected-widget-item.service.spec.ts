import { TestBed } from '@angular/core/testing';

import { SelectedWidgetItemService } from './selected-widget-item.service';

describe('SelectedWidgetItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedWidgetItemService = TestBed.get(SelectedWidgetItemService);
    expect(service).toBeTruthy();
  });
});
