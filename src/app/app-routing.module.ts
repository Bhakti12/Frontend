import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/LoginModule/login.component';
import { RegisterComponent } from 'src/app/RegistrationModule/registration.component';
import { HeaderFooterComponent } from './Layout/Header-Footer/header-footer.component';
import { About } from './Layout/about/about.component';
import { PageNotFoundComponent } from './PageNotFound/pageNotFound.component';
import { AuthGuard } from './auth-guard.guard';
import { AuthService } from './Service/AuthService';


export const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home',component : HeaderFooterComponent},
  {path : 'about',component : About},
  {path : '**',component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }