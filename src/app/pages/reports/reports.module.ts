import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from './views/views.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailedComponent } from './components/detailed/detailed.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoPermComponent } from './components/no-perm/no-perm.component';

@NgModule({
  imports: [CommonModule, ViewsModule, SharedModule, ReportsRoutingModule],
  declarations: [
    IndexComponent,
    DetailedComponent,
    NotFoundComponent,
    NoPermComponent,
  ],
})
export class ReportsModule {}
