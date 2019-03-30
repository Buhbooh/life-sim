import { Cell } from './cell';
import { CellState } from './cell-state';

export class CellGrid {
    public cells: Cell[][];
    public height: number;
    public width: number;

    constructor(width: number, height: number, initCells: number[][] = []) {
        this.cells = [];

        for (let y = 0; y < height; y++) {
            const row: Cell[] = [];

            for (let x = 0; x < width; x++) {
                const cell = new Cell();

                if (initCells.length > 0) {
                    switch (initCells[y][x]) {
                        case 0:
                            cell.state = CellState.Dead;
                            break;
                        case 1:
                            cell.state = CellState.Healthy1;
                            break;
                        case 2:
                            cell.state = CellState.Healthy2;
                            break;
                        default:
                            throw (new Error('Invalid initialization string.'));
                    }
                }
                row.push(cell);
            }

            this.cells.push(row);
            this.height = height;
            this.width = width;
        }
    }

    public getCellState(x: number, y: number): CellState {
        return this.cells[y][x].state;
    }
}
