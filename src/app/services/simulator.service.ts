import { AgingService } from './aging.service';
import { CellGrid } from '../models/cell-grid';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SimulatorService {

    private _iteration: number;
    public get iteration(): number {
        return this._iteration;
    }

    private _currentGrid: CellGrid;
    public get currentGrid(): CellGrid {
        return this._currentGrid;
    }

    constructor(private ager: AgingService) {
    }

    public reset(grid: CellGrid) {
        this._currentGrid = grid;
        this._iteration = 0;
    }

    public iterate() {
        this._currentGrid = this.ager.ageCells(this._currentGrid);
        this._iteration++;
    }
}
