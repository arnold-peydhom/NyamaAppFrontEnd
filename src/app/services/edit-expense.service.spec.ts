import { TestBed } from '@angular/core/testing';

import { EditExpenseService } from './edit-expense.service';

describe('EditExpenseService', () => {
  let service: EditExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
