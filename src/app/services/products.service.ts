import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product, ProductResponse } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  listProducts = signal<Product[]>([]);

  private readonly apiUrl =
    'https://kainet-challenge-api-production.up.railway.app/api/productos';

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<ProductResponse>(this.apiUrl).subscribe((response) => {
      this.listProducts.set(response.data);
    });
  }
}
