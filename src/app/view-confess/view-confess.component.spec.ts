import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfessComponent } from './view-confess.component';

describe('ViewConfessComponent', () => {
  let component: ViewConfessComponent;
  let fixture: ComponentFixture<ViewConfessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewConfessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
