import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


import { RouterModule,Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path : 'signup' , component : SignupComponent}
    ])
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class UserModule { }
