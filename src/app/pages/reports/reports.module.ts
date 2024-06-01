import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from './views/views.module';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [CommonModule, ViewsModule, ReportsRoutingModule],
  declarations: [],
})
export class ReportsModule {}
