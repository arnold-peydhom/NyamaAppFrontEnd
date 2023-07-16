import { TestBed } from '@angular/core/testing';

import { ListExpenseService } from './list-expense.service';

describe('ListExpenseService', () => {
  let service: ListExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
