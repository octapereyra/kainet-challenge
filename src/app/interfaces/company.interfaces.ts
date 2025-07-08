export interface Company {
  id: number;
  cuit: number;
  razonSocial: string;
}

export interface CompanyResponse {
  message: string;
  data: Company[];
}
