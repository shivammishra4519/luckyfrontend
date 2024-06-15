import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminregisterComponent } from './pages/adminregister/adminregister.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './gaurd/auth.guard';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { RegisterDistributorComponent } from './pages/register-distributor/register-distributor.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { LoteryComponent } from './pages/lotery/lotery.component';

import { UserlistComponent } from './pages/userlist/userlist.component';
import { DistrbutorlistComponent } from './pages/distrbutorlist/distrbutorlist.component';
import { WidComponent } from './pages/wid/wid.component';
import { WidslistComponent } from './pages/widslist/widslist.component';
import { Widslist1Component } from './widslist1/widslist1.component';
import { WidslistbynumComponent } from './widslistbynum/widslistbynum.component';
import { WidsforuserComponent } from './pages/widsforuser/widsforuser.component';
import { WinnerComponent } from './pages/winner/winner.component';
import { SetCommessionComponent } from './pages/set-commession/set-commession.component';
import { adminAuthGuard } from './gaurd/admin-auth.guard';
import { AddmoneyComponent } from './pages/addmoney/addmoney.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { AddPayementGatwayApiComponent } from './pages/add-payement-gatway-api/add-payement-gatway-api.component';
import { TransectionsComponent } from './pages/transections/transections.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin-registraion',component:AdminregisterComponent},
  {path:'payment-success',component:PaymentsuccessComponent},
  // {path:'sidenav',component:SidenavComponent},
  {
    path:'dashboard',component:SidenavComponent,
    children:[
      {path:'home',component:HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path:'register-distributor',component:RegisterDistributorComponent,canActivate:[adminAuthGuard]},
      {path:'register-user',component:UserRegisterComponent},
      {path:'user-list',component:UserlistComponent},
      {path:'distributor-list',component:DistrbutorlistComponent,canActivate:[adminAuthGuard]},
      {path:'wid',component:WidComponent},
      {path:'wid-list',component:WidslistComponent},
      {path:'wid-list1',component:Widslist1Component},
      {path:'wid-list2',component:WidslistbynumComponent},
      {path:'wids-user',component:WidsforuserComponent},
      {path:'winner',component:WinnerComponent},
      {path:'add-money',component:AddmoneyComponent},
      {path:'add-api',component:AddPayementGatwayApiComponent},
      {path:'transections',component:TransectionsComponent},
      {path:'set-commession',component:SetCommessionComponent,canActivate:[adminAuthGuard]},
      {path:'manage-lotery',component:LoteryComponent,
        canActivate:[adminAuthGuard]},
    ],
    canActivate:[AuthGuard]
  },
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
