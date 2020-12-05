import { Component, Input, OnInit} from '@angular/core';

import { Producto } from '../Producto';

@Component({
  selector: 'store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.scss']
})
export class StoreCartComponent implements OnInit {

  @Input()
  carrito: Producto[];

  @Input()
  total: Number;

  constructor() { }

  ngOnInit(): void {
  }
}
