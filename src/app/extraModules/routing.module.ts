import { AuthService } from '../services/auth.service';
import { GuardService } from '../services/guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { SecretComponent } from "app/secret/secret.component";

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'secret',component:SecretComponent,canActivate:[GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[GuardService,AuthService]
})
export class RoutingModule { }
export const routingComponents = [HomeComponent];
