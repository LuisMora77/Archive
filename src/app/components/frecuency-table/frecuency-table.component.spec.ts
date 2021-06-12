import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuencyTableComponent } from './frecuency-table.component';

describe('FrecuencyTableComponent', () => {
  let component: FrecuencyTableComponent;
  let fixture: ComponentFixture<FrecuencyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuencyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
