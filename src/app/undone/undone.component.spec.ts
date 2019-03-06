import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoneComponent } from './undone.component';

describe('UndoneComponent', () => {
  let component: UndoneComponent;
  let fixture: ComponentFixture<UndoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
