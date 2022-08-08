import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvolumereportComponent } from './productvolumereport.component';

describe('ProductvolumereportComponent', () => {
  let component: ProductvolumereportComponent;
  let fixture: ComponentFixture<ProductvolumereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductvolumereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductvolumereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
