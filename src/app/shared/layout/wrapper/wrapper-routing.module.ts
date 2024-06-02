import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WrapperComponent,
  // },
  {
    path: 'tickets',
    title: 'Tickets',
    loadChildren: () =>
      import('../../../pages/tickets/tickets.module').then(
        (m) => m.TicketsModule,
      ),
  },
  {
    path: 'reopen-tickets',
    title: 'Reopen Tickets',
    loadChildren: () =>
      import('../../../pages/reopen-tickets/reopen-tickets.module').then(
        (m) => m.ReopenTicketsModule,
      ),
  },
  {
    path: 'reports',
    title: 'Reports',
    loadChildren: () =>
      import('../../../pages/reports/reports.module').then(
        (m) => m.ReportsModule,
      ),
  },
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full',
  },
  // // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
