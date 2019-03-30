import { CellState } from './cell-state';

export class Cell {
    public state: CellState;

    constructor() {
        this.state = CellState.Dead;
    }
}
