/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArmazemComponent } from './armazem.component';

describe('ArmazemComponent', () => {
  let component: ArmazemComponent;
  let fixture: ComponentFixture<ArmazemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmazemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
