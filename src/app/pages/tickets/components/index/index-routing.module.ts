import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AddNewCitationComponent } from './components/add-new-citation/add-new-citation.component';
import { AddNewBookingComponent } from './components/add-new-booking/add-new-booking.component';
import { AddNewPackageComponent } from './components/add-new-package/add-new-package.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { AddOtherTicketComponent } from './components/add-other-ticket/add-other-ticket.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'add-new-citation', component: AddNewCitationComponent },
  { path: 'add-new-booking', component: AddNewBookingComponent },
  { path: 'add-new-package', component: AddNewPackageComponent },
  { path: 'add-new-employee', component: AddNewEmployeeComponent },
  { path: 'add-other-ticket', component: AddOtherTicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
