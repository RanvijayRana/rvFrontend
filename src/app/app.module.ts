import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { UserModule } from './user/user.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FeatureModule,
    SharedModule,
    RouterModule.forRoot([
      {path : 'login' , component : LoginComponent, pathMatch : 'full'},
      {path : '' , redirectTo : 'login' , pathMatch : 'full'},
      {path: '*' , component : LoginComponent},
      {path: '**' , component : LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
