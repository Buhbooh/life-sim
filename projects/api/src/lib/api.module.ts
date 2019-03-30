import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [HttpClient]
})
export class ApiModule { }
