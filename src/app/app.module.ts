import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from "../app/core/material.module";
import { LoginComponent } from './LoginModule/login.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { routes } from "../app/app-routing.module";
import { RegisterComponent } from './RegistrationModule/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderFooterComponent } from './shared/Header-Footer/header-footer.component';
import { About } from './shared/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderFooterComponent,
    About
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
