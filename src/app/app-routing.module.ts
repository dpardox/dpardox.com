import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './modules/home/pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
