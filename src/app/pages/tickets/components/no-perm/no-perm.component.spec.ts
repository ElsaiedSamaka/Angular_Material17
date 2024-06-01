/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoPermComponent } from './no-perm.component';

describe('NoPermComponent', () => {
  let component: NoPermComponent;
  let fixture: ComponentFixture<NoPermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
