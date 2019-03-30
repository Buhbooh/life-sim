import { Injectable } from '@angular/core';
import { CellGrid } from '../models/cell-grid';
import { CellState } from '../models/cell-state';

@Injectable({
    providedIn: 'root'
})
export class AgingService {

    public ageCells(grid: CellGrid): CellGrid {
        throw new Error('not implemented');
    }

}
