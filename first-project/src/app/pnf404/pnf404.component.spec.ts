import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pnf404Component } from './pnf404.component';

describe('Pnf404Component', () => {
  let component: Pnf404Component;
  let fixture: ComponentFixture<Pnf404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pnf404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pnf404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
