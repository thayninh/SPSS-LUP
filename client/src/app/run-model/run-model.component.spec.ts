import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunModelComponent } from './run-model.component';

describe('RunModelComponent', () => {
  let component: RunModelComponent;
  let fixture: ComponentFixture<RunModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
