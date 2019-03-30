import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CellGrid } from 'src/app/models/cell-grid';

@Component({
  selector: 'app-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellGridComponent implements OnInit {

  @Input() cellGrid: CellGrid;

  public get cells() {
    return this.cellGrid ? this.cellGrid.cells : [];
  }

  constructor() { }


  ngOnInit() {
    console.log(this.cellGrid.cells.length);
  }

}
