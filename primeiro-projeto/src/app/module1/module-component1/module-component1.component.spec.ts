import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent1Component } from './module-component1.component';

describe('ModuleComponent1Component', () => {
  let component: ModuleComponent1Component;
  let fixture: ComponentFixture<ModuleComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
