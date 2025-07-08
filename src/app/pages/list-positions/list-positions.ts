import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PositionsService } from '../../services/positions.service';

@Component({
  selector: 'app-list-positions',
  imports: [DatePipe],
  templateUrl: './list-positions.html',
  styleUrl: './list-positions.css',
})
export class ListPositions {
  public positionsService = inject(PositionsService);
}
