import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  
  constructor() { }
  getItems() {
    return this.items;
  }
  
  addToCart(product: Product) {
    this.items.push(product);
    
  }
  
 

  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

