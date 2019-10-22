import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7Component } from './lesson7.component';

describe('Lesson7Component', () => {
  let component: Lesson7Component;
  let fixture: ComponentFixture<Lesson7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
