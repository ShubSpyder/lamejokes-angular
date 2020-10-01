import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughableComponent } from './laughable.component';

describe('LaughableComponent', () => {
  let component: LaughableComponent;
  let fixture: ComponentFixture<LaughableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
