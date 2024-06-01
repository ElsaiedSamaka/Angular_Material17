import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoPermComponent } from './components/no-perm/no-perm.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: ':id',
    component: DetailedComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'no-perm',
    component: NoPermComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
