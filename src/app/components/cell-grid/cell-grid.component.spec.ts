import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellGridComponent } from './cell-grid.component';

describe('CellGridComponent', () => {
  let component: CellGridComponent;
  let fixture: ComponentFixture<CellGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
