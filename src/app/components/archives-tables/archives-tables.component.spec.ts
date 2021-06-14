import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesTablesComponent } from './archives-tables.component';

describe('ArchivesTablesComponent', () => {
  let component: ArchivesTablesComponent;
  let fixture: ComponentFixture<ArchivesTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
