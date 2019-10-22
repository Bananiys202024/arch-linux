import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson8Component } from './lesson8.component';

describe('Lesson8Component', () => {
  let component: Lesson8Component;
  let fixture: ComponentFixture<Lesson8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
