import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product, ProductResponse } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  listProducts = signal<Product[]>([]);

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.http
      .get<ProductResponse>('http://127.0.0.1:8000/api/productos')
      .subscribe((response) => {
        this.listProducts.set(response.data);
      });
  }
}
