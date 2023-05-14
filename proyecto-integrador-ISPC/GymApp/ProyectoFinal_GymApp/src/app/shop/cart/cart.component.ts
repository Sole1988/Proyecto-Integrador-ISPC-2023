import { Component, OnInit } from '@angular/core';
;
import { Product } from '../models/product.model';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  items: Product[] = [];
  total: number = 0;
  isCartOpen: boolean = false;


  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  addItem(product: any) {
    this.cartService.addToCart(product);
  }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  hideCart() {
    const cartContainer = document.getElementById('cart-container');

if (cartContainer) {
  cartContainer.classList.remove('show');
}

  }
  calculateCartTotal() {
    let total = 0;
    for (let item of this.cartItems) {
      total += (item.quantity * item.product.price);
    }
    this.cartTotal = total;
  }

  updateCartItem(item: any) {
    }

  removeCartItem(item: any) {
   
  }

  checkout() {
    // Do checkout process here
  }


  updateItem(item: Product) {
   
  }

  removeItem(item: Product) {
   
  }
  
  clearCart() {
  
  }
}
