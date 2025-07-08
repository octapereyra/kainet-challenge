import { Routes } from '@angular/router';
import { ListPositions } from './pages/list-positions/list-positions';
import { CreatePosition } from './pages/create-position/create-position';
import { Index } from './pages/index';

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
