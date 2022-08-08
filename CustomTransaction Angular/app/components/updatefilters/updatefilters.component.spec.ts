import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefiltersComponent } from './updatefilters.component';

describe('UpdatefiltersComponent', () => {
  let component: UpdatefiltersComponent;
  let fixture: ComponentFixture<UpdatefiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
