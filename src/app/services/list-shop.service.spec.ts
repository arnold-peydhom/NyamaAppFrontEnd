import { TestBed } from '@angular/core/testing';

import { ListShopService } from './list-shop.service';

describe('ListShopService', () => {
  let service: ListShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
