import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-pg/auth/auth.component';
import { SignInComponent } from './auth-pg/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth-pg/pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,

    children: [
      {path: '', redirectTo:'sign-in', pathMatch:'full'},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
