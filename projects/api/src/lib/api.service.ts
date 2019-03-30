import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getSeeds(): Observable<Seed[]> {
    return this.http.get<Seed[]>('./assets/seeds.json');
  }
}
