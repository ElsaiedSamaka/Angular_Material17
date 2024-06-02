import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReOpenTicketsRoutingModule } from './reopen-tickets-routing.module';
import { ViewsModule } from './views/views.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsModule,
    SharedModule,
    ReOpenTicketsRoutingModule,
  ],
  declarations: [IndexComponent],
})
export class ReopenTicketsModule {}
