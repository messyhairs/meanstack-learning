import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ImageserverComponent } from './imageserver/imageserver.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: SignupComponent
  },
  // {
  //   path: '', component: ImageserverComponent
  // },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'userinformation', component: UserinfoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'userinformation/edit/:id', component: EditdetailsComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
