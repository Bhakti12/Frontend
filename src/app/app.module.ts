import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from "../app/core/material.module";
import { LoginComponent } from 'src/Authentication/LoginModule/login.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { routes } from "../app/app-routing.module";
import { RegisterComponent } from 'src/Authentication/RegistrationModule/registration.component';
import { AuthenticationComponent } from 'src/Authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
