import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home'),
  },
  {
    path: 'cv',
    loadComponent: () => import('@features/cv/cv'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
