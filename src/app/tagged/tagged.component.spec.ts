import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggedComponent } from './tagged.component';

describe('TaggedComponent', () => {
  let component: TaggedComponent;
  let fixture: ComponentFixture<TaggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaggedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
