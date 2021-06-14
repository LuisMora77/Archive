import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsSelectionComponent } from './views-selection.component';

describe('ViewsSelectionComponent', () => {
  let component: ViewsSelectionComponent;
  let fixture: ComponentFixture<ViewsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
