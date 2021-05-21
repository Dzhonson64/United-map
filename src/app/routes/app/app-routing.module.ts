import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../components/login/login.component";
import {AppModule} from "../../app.module";
import {AppComponent} from "../../app.component";
import {RegisterComponent} from "../../components/register/register.component";


const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component: RegisterComponent
  }
  // {
  //   path: 'registration', children: [
  //     {path: 'user', component: RegistrationComponent},
  //     {path: 'company', component: CompanyRegistrationComponent}
  //   ]
  // },
  // { path: 'me', loadChildren: () => ProfileModule},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
