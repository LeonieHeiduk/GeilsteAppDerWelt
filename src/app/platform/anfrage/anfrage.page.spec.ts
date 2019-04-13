import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfragePage } from './anfrage.page';

describe('AnfragePage', () => {
  let component: AnfragePage;
  let fixture: ComponentFixture<AnfragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
