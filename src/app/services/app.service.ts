import { ApiService, Seed } from 'projects/api/src/public_api';
import { SimulatorService } from './simulator.service';
import { CellGridFactory } from './factories/cell-grid-factory';
import { Injectable } from '@angular/core';
import { CellGrid } from '../models/cell-grid';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private SPEED = 200;

    private _seeds: Seed[];
    public get seeds() {
        return this._seeds;
    }

    private _selectedSeed: Seed;
    public get selectedSeed() {
        return this._selectedSeed;
    }

    public get iteration(): number {
        return this.simulator.iteration;
    }

    public get isRunning(): boolean {
        return this._intervalId;
    }

    public get currentGrid(): CellGrid {
        return this.simulator.currentGrid;
    }

    private _intervalId;

    constructor(private apiService: ApiService, private simulator: SimulatorService, private gridFactory: CellGridFactory) {

        this.simulator.reset(this.gridFactory.createEmptyGrid());

        this.apiService.getSeeds().subscribe(data => {
            this._seeds = data;
        });
    }

    public startSimulation() {
        if (!this.isRunning) {
            const this1 = this;
            this._intervalId = setInterval(this.simulator.iterate.bind(this1.simulator), this.SPEED);
        }
    }

    public stopSimulation() {
        if (this.isRunning) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }

    public setSeed(seed: Seed) {
        this.stopSimulation();
        this._selectedSeed = seed;
        this.simulator.reset(this.gridFactory.createGridFromSeed(seed));
    }
}
