export interface Position {
  company: string;
  product: string;
  dateAvailable: string;
  price: number;
  currency: string;
}

export interface PositionItem {
  id?: number;
  idEmpresa: number;
  idProducto: number;
  fechaEntregaInicio: string;
  moneda: string;
  precio: number;
  empresa?: {
    id: number;
    cuit: number;
    razonSocial: string;
  };
  producto?: {
    id: number;
    nombre: string;
    usoFrecuente: number;
  };
}

export interface PositionResponse {
  message: string;
  data: PositionItem[];
}
