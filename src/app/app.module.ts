import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { CellGridComponent } from './components/cell-grid/cell-grid.component';
import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import { ApiModule } from 'projects/api/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    CellGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
