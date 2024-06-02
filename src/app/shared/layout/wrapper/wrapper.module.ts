import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, WrapperRoutingModule],
})
export class WrapperModule {}
