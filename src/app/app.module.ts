import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatToolbarModule} from '@angular/material/toolbar';
// nebular
import { COSMIC_THEME, NbThemeModule ,NbLayoutModule, NbSidebarModule, NbCardModule, NbMenuModule, NbInputModule,NbContextMenuModule ,NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    //nebular
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbContextMenuModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
