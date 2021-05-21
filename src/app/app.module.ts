import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./routes/app/app-routing.module";
import {LoginService} from "./services/login.service";
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule { }
