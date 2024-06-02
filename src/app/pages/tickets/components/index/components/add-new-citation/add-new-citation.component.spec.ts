/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddNewCitationComponent } from './add-new-citation.component';

describe('AddNewCitationComponent', () => {
  let component: AddNewCitationComponent;
  let fixture: ComponentFixture<AddNewCitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCitationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
