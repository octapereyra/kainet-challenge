export interface Product {
  id: number;
  nombre: string;
  usoFrecuente: number;
}

export interface ProductResponse {
  message: string;
  data: Product[];
}
