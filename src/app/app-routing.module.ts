import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent,
    pathMatch:'full'

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch:'full'

  },
  {
    path: 'register',
    component: RegistrationComponent,
    pathMatch:'full'

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
