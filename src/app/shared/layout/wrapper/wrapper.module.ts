import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, WrapperRoutingModule],
  // declarations: [WrapperComponent],
  // exports: [WrapperComponent],
})
export class WrapperModule {}
