import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //     path: 'index',
  //    title: 'Home',
  //     loadChildren: () =>
  //         import('./index/index.module').then((m) => m.IndexModule),
  // },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full',
  },

  // { path: '**', component: PageNotFoundComponent },
];
