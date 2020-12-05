import { Component, OnInit } from '@angular/core';

import { ProductoEnCarrito } from '../ProductoEnCarrito';
import { Producto } from '../Producto';
import { TiendaDataService } from '../tienda-data.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  productos: Producto[] = [];

  carrito: ProductoEnCarrito[] = [];

  total: number = 0;
  
  constructor(private tiendaDataService: TiendaDataService) { }

  ngOnInit(): void {
    this.tiendaDataService.getProductos()
    .subscribe(productos => {
      this.productos = productos
    });
  }

  actualizarTotal() {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio, 0);
  }

  agregarAlCarrito(id) {
    const productoEnCarrito = this.carrito.filter(producto => producto.id === id);
    const productoOriginal = this.productos.filter(producto => producto.id === id);
    if(productoEnCarrito.length !== 0) {
      if(productoEnCarrito[0].cantidad < productoOriginal[0].stock)
      this.carrito = this.carrito.map(producto => {
        if(producto.id === id) {
          return {
            ...producto,
            cantidad: producto.cantidad + 1
          }
        } else return producto;
      })
    } else {
      this.carrito.push({id: id, nombre: productoOriginal[0].nombre, precio: productoOriginal[0].precio, cantidad: 1})
    }

    this.actualizarTotal();
  }
}
