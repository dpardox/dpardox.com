import { Routes } from '@angular/router';

import { HomePage } from './modules/home/pages/home/home.page';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
