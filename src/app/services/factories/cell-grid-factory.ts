import { Injectable } from '@angular/core';
import { Seed } from 'projects/api/src/public_api';
import { CellGrid } from 'src/app/models/cell-grid';

@Injectable({
    providedIn: 'root'
})
export class CellGridFactory {
    public createEmptyGrid() {
        return new CellGrid(28, 28);
    }

    public createGridFromSeed(seed: Seed) {
        return new CellGrid(28, 28, seed.cells);
    }
}
