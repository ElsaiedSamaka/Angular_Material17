/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddOtherTicketComponent } from './add-other-ticket.component';

describe('AddOtherTicketComponent', () => {
  let component: AddOtherTicketComponent;
  let fixture: ComponentFixture<AddOtherTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddOtherTicketComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
