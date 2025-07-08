import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {
  Position,
  PositionItem,
  PositionResponse,
} from '../interfaces/position.interfaces';
import { PositionMapper } from '../mapper/position.mapper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private http = inject(HttpClient);
  private routerService = inject(Router);

  listPositions = signal<Position[]>([]);
  listPositionsLoading = signal(true);

  constructor() {
    this.loadPositions();
  }

  loadPositions() {
    this.http
      .get<PositionResponse>('http://127.0.0.1:8000/api/posiciones')
      .subscribe((response) => {
        const positions = PositionMapper.mapPositionItemsToPositionArray(
          response.data
        );
        this.listPositions.set(positions);
        this.listPositionsLoading.set(false);
      });
  }

  createPosition(newPosition: PositionItem) {
    this.http
      .post<PositionResponse>(
        'http://127.0.0.1:8000/api/posiciones',
        newPosition
      )
      .subscribe({
        next: () => {
          this.loadPositions();
          this.routerService.navigate(['listPositions']);
          alert('Posición creada correctamente');
        },
        error: (error: HttpErrorResponse) => {
          alert(
            `Ha ocurrido un error al crear la posición: ${error.status} - ${error.error.message}`
          );
        },
      });
  }
}
