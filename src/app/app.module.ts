import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./routes/app/app-routing.module";
import {LoginService} from "./services/login.service";
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthModule} from "./routes/app/auth/auth.module";
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { IndexContentComponent } from './components/index-content/index-content.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BookingComponent } from './components/booking/booking.component';
import { MapComponent } from './components/map/map.component';
import { ExcursionComponent } from './components/excursion/excursion.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TransportComponent } from './components/transport/transport.component';
import { SharingComponent } from './components/sharing/sharing.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    AuthComponent,
    HeaderBarComponent,
    IndexContentComponent,
    WeatherComponent,
    BookingComponent,
    MapComponent,
    ExcursionComponent,
    ScheduleComponent,
    RestaurantComponent,
    ProfileComponent,
    TransportComponent,
    SharingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule { }
