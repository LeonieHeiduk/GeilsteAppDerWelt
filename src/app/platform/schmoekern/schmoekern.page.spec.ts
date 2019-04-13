import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmoekernPage } from './schmoekern.page';

describe('SchmoekernPage', () => {
  let component: SchmoekernPage;
  let fixture: ComponentFixture<SchmoekernPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmoekernPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmoekernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
