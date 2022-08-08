import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomervaluereportComponent } from './customervaluereport.component';

describe('CustomervaluereportComponent', () => {
  let component: CustomervaluereportComponent;
  let fixture: ComponentFixture<CustomervaluereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomervaluereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomervaluereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
