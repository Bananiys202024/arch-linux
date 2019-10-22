import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3Component } from './lesson3.component';

describe('Lesson3Component', () => {
  let component: Lesson3Component;
  let fixture: ComponentFixture<Lesson3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
