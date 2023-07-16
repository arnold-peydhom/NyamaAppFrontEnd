import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopComponent } from './edit-shop.component';

describe('EditShopComponent', () => {
  let component: EditShopComponent;
  let fixture: ComponentFixture<EditShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditShopComponent]
    });
    fixture = TestBed.createComponent(EditShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
