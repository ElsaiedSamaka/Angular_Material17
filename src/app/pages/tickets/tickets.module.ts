import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { ViewsModule } from './views/views.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  imports: [CommonModule, ViewsModule, SharedModule, TicketsRoutingModule],
  declarations: [IndexComponent],
})
export class TicketsModule {}
