import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];
  items: Product[] = []; // define items property as an array of Product objects

  
  constructor(private productService: ProductService) {
   
    this.products = productService.getProducts();
  }
  getItems() {
    return this.items;
  }
  
  addToCart(product: Product) {
    this.items.push(product);
    window.alert('El producto ha sido agregado al carrito!');
  }


  clearCart() {
    this.items = [];
    return this.items;
  }
  viewProduct(product: Product) {
    const myArray = product;
    window.alert('abrió el detalle del producto!' + JSON.stringify(myArray));
    console.log('Product selected:', product);}
    
  ngOnInit(): void {
  }
}




