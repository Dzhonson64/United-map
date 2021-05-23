import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from "./auth/auth.module";
import {IndexComponent} from "../../components/index/index.component";
import {WeatherComponent} from "../../components/weather/weather.component";
import {BookingComponent} from "../../components/booking/booking.component";
import {MapComponent} from "../../components/map/map.component";
import {ExcursionComponent} from "../../components/excursion/excursion.component";
import {ScheduleComponent} from "../../components/schedule/schedule.component";
import {RestaurantComponent} from "../../components/restaurant/restaurant.component";
import {ProfileComponent} from "../../components/profile/profile.component";
import {TransportComponent} from "../../components/transport/transport.component";
import {SharingComponent} from "../../components/sharing/sharing.component";


const routes: Routes = [
  {
    path: '', component:IndexComponent, children: [
      {path: 'weather', component: WeatherComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'map', component: MapComponent},
      {path: 'excursion', component: ExcursionComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'booking', component: ScheduleComponent},
      {path: 'restaurant', component: RestaurantComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'transport', component: TransportComponent},
      {path: 'sharing', component: SharingComponent},



    ]

  },

  {
    path: 'auth', loadChildren: () => AuthModule
  },
  // { path: 'me', loadChildren: () => ProfileModule},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
