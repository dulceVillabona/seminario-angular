import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from './Animal';

const URL = "https://5ee297a38b27f30016094cd1.mockapi.io/animalesAdopcion";

@Injectable({
  providedIn: 'root'
})
export class AdopcionesDataService {

  constructor(private http: HttpClient) { }

  public getAnimals() : Observable<Animal[]> {
    return this.http.get<Animal[]>(URL);
  }
}
