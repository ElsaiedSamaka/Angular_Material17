import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { AddNewCitationComponent } from './components/add-new-citation/add-new-citation.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, IndexRoutingModule],
  declarations: [AddNewCitationComponent],
})
export class IndexModule {}
