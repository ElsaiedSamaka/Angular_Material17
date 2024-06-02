import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { AddNewCitationComponent } from './components/add-new-citation/add-new-citation.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { AddNewBookingComponent } from './components/add-new-booking/add-new-booking.component';
import { AddOtherTicketComponent } from './components/add-other-ticket/add-other-ticket.component';
import { AddNewPackageComponent } from './components/add-new-package/add-new-package.component';

@NgModule({
  imports: [CommonModule, SharedModule, IndexRoutingModule],
  declarations: [
    AddNewCitationComponent,
    AddNewEmployeeComponent,
    AddNewEmployeeComponent,
    AddNewBookingComponent,
    AddNewPackageComponent,
    AddOtherTicketComponent,
  ],
})
export class IndexModule {}
