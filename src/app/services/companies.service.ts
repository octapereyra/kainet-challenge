import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Company, CompanyResponse } from '../interfaces/company.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private http = inject(HttpClient);

  listCompanies = signal<Company[]>([]);

  private readonly apiUrl =
    'https://kainet-challenge-api-production.up.railway.app/api/empresas';

  constructor() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.http.get<CompanyResponse>(this.apiUrl).subscribe((response) => {
      this.listCompanies.set(response.data);
    });
  }
}
