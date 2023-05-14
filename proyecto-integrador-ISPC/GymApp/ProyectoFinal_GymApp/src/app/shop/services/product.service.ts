import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {   id: 5, 
      name: 'Plan 1', 
      price: 40.99, 
      description: 'This is the description for Product 5', 
      image: '../../assets/platinum.jpg', 
      category: 'Planes'  },
    {  id: 5, 
      name: 'Plan 2', 
      price: 50.99, 
      description: 'This is the description for Product 5', 
      image: '../../assets/premium.jpg', 
      category: 'Planes'  },
    {   id: 5, 
      name: 'Plan 3', 
      price: 80.99, 
      description: 'This is the description for Product 5', 
      image: '../../assets/pro.jpg', 
      category: 'Planes'  },
    {   id: 5, 
      name: 'Plan 4', 
      price: 90.99, 
      description: 'This is the description for Product 5', 
      image: '../../assets/bg-3.jpg', 
      category: 'Planes'  },
    {   id: 5, 
      name: 'Plan 5', 
      price: 100.99, 
      description: 'This is the description for Product 5', 
      image: '../../assets/bg-2.jpg', 
      category: 'Planes'  }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
