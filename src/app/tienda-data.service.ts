import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from './Producto';

const URL = "https://5ee297a38b27f30016094cd1.mockapi.io/tienda";

@Injectable({
  providedIn: 'root'
})
export class TiendaDataService {

  constructor(private http: HttpClient) { }

  public getProductos() : Observable<Producto[]> {
    return this.http.get<Producto[]>(URL);
  }
}
