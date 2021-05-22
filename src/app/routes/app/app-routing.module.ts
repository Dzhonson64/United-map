import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from "./auth/auth.module";
import {IndexComponent} from "../../components/index/index.component";
import {WeatherComponent} from "../../components/weather/weather.component";
import {BookingComponent} from "../../components/booking/booking.component";
import {MapComponent} from "../../components/map/map.component";


const routes: Routes = [
  {
    path: '', component:IndexComponent, children: [
      {path: 'weather', component: WeatherComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'map', component: MapComponent},
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
