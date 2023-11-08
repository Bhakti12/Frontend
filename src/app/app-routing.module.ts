import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/LoginModule/login.component';
import { RegisterComponent } from 'src/app/RegistrationModule/registration.component';

export const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : '',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
