import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedComponent } from './components/detailed/detailed.component';
import { NoPermComponent } from './components/no-perm/no-perm.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: ':id',
    component: DetailedComponent,
  },
  {
    path: 'no-perm',
    component: NoPermComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
