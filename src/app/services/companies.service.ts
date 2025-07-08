import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Company, CompanyResponse } from '../interfaces/company.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private http = inject(HttpClient);

  listCompanies = signal<Company[]>([]);

  constructor() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.http
      .get<CompanyResponse>('http://127.0.0.1:8000/api/empresas')
      .subscribe((response) => {
        this.listCompanies.set(response.data);
      });
  }
}
