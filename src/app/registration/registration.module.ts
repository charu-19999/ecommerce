import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFromComponent } from './login-from/login-from.component';
import { LoginStatusComponent } from './login-status/login-status.component';

@NgModule({
  declarations: [LoginFromComponent, LoginStatusComponent],
  imports: [CommonModule],
  exports: [LoginFromComponent],
})
export class RegistrationModule {}
