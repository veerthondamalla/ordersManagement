import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertrackComponent } from './ordertrack.component';

describe('OrdertrackComponent', () => {
  let component: OrdertrackComponent;
  let fixture: ComponentFixture<OrdertrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdertrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdertrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
