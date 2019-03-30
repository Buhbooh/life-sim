import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from 'src/app/models/cell';
import { CellState } from 'src/app/models/cell-state';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {

  @Input() public cell: Cell;

  public CellState = CellState;

  public get cellClass(): string {
    switch (this.cell.state) {
      case CellState.Dead:
        return 'dead';
      case CellState.Healthy1:
        return 'healthy1';
      case CellState.Healthy2:
        return 'healthy2';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
