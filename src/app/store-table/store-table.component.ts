import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TiendaDataService } from '../tienda-data.service';
import { Producto } from '../Producto';

@Component({
  selector: 'store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})
export class StoreTableComponent implements OnInit {

  productos: Producto[] = [];

  @Output()
  agregarAlCarrito: EventEmitter<Number> = new EventEmitter<Number>();

  constructor(private tiendaDataService: TiendaDataService) { }

  ngOnInit(): void {
    this.tiendaDataService.getProductos()
    .subscribe(productos => {
      this.productos = productos
    });
  }

  agregar(idProducto): void {
    this.agregarAlCarrito.emit(idProducto);
  }
}
