import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { WrapperModule } from './layout/wrapper/wrapper.module';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [SideNavComponent, NavBarComponent, WrapperComponent],
  exports: [SideNavComponent, NavBarComponent, WrapperComponent],
})
export class SharedModule {}
