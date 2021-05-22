import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "../../../components/login/login.component";
import {RegisterComponent} from "../../../components/register/register.component";
import {AppComponent} from "../../../app.component";
import {AuthComponent} from "../../../components/auth/auth.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports:[]
})
export class AuthModule { }
