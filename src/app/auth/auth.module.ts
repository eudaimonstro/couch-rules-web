import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SignupComponent, SignInComponent],
  imports: [CommonModule],
})
export class AuthModule {}
