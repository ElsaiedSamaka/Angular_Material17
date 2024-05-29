import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignoutComponent } from './components/signout/signout.component';
import { SignupComponent } from './components/signup/signup.component';
import { RtlltrDirective } from '../../../core/directives/rtlltr.directive';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  declarations: [SigninComponent, SignupComponent, SignoutComponent],
  providers: [RtlltrDirective],
})
export class AuthModule {}
