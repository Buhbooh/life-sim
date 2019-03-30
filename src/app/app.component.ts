import { Component, OnInit } from '@angular/core';
import { CellGrid } from './models/cell-grid';
import { AppService } from './services/app.service';
import { Seed } from 'projects/api/src/lib/seed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public get cellGrid(): CellGrid {
    return this.service.currentGrid;
  }

  public set selectedSeed(value: Seed) {
    this.service.setSeed(value);
  }

  public get selectedSeed(): Seed {
    return this.service.selectedSeed;
  }

  public get iteration(): number {
    return this.service.iteration;
  }

  public get startDisabled(): boolean {
    return this.service.isRunning;
  }

  public get stopDisabled(): boolean {
    return !this.service.isRunning;
  }

  constructor(private service: AppService) {

  }

  public get seeds() {
    return this.service.seeds;
  }

  ngOnInit() {
    // this.cellGrid = new CellGrid('0'.repeat(169));
  }

  public onSimulate() {
    this.service.startSimulation();
  }

  public onStop() {
    this.service.stopSimulation();
  }
}
