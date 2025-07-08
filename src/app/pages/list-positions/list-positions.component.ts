import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PositionsService } from '../../services/positions.service';
import { LoaderComponent } from '../../components/shared/loader/loader.component';

@Component({
  selector: 'app-list-positions',
  imports: [DatePipe, LoaderComponent],
  templateUrl: './list-positions.component.html',
})
export class ListPositions {
  public positionsService = inject(PositionsService);
}
