import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  // path : /dashboard, otras pages colocados "PagesRoutingModule"
  // path : /login, /register colocados "AuthRoutingModule"
  {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : '**', component: NopagesfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
