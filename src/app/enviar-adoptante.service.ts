import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Adoptante } from './Adoptante';

const URL = "https://5ee297a38b27f30016094cd1.mockapi.io/adoptantes";

@Injectable({
  providedIn: 'root'
})
export class EnviarAdoptanteService {

  constructor(private http: HttpClient) { }

  public sendAdoptante(adoptante: Adoptante) : Observable<Adoptante> {
    return this.http.post<Adoptante>(URL, adoptante);
  }
}
