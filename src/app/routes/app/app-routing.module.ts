import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../components/login/login.component";


const routes: Routes = [
  // {
  //   path: '', loadChildren: () => MainModule
  // },
  {
    path: 'login', component: LoginComponent
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
