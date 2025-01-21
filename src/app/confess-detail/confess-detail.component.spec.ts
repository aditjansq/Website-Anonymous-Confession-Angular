import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessDetailComponent } from './confess-detail.component';

describe('ConfessDetailComponent', () => {
  let component: ConfessDetailComponent;
  let fixture: ComponentFixture<ConfessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfessDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
