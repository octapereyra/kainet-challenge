import { Routes } from '@angular/router';
import { Index } from './pages/index/index.component';
import { ListPositions } from './pages/list-positions/list-positions.component';
import { CreatePosition } from './pages/create-position/create-position.component';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'listPositions',
    component: ListPositions,
  },
  {
    path: 'createPosition',
    component: CreatePosition,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
