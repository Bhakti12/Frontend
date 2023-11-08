import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/LoginModule/login.component';
import { RegisterComponent } from 'src/app/RegistrationModule/registration.component';
import { HeaderFooterComponent } from './shared/Header-Footer/header-footer.component';
import { About } from './shared/about/about.component';

export const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : '',component : LoginComponent},
  {path : 'home',component : HeaderFooterComponent},
  {path : 'about',component : About}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
