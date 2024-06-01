import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReOpenTicketsRoutingModule } from './reopen-tickets-routing.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [CommonModule, ViewsModule, ReOpenTicketsRoutingModule],
  declarations: [],
})
export class ReopenTicketsModule {}
