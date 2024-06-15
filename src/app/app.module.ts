import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminregisterComponent } from './pages/adminregister/adminregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { RegisterDistributorComponent } from './pages/register-distributor/register-distributor.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { LoteryComponent } from './pages/lotery/lotery.component';
import { DistrbutorlistComponent } from './pages/distrbutorlist/distrbutorlist.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { WidComponent } from './pages/wid/wid.component';
import { WidslistComponent } from './pages/widslist/widslist.component';
import { Widslist1Component } from './widslist1/widslist1.component';
import { WidslistbynumComponent } from './widslistbynum/widslistbynum.component';
import { CommonModule } from '@angular/common';
import { WidsforuserComponent } from './pages/widsforuser/widsforuser.component';
import { WinnerComponent } from './pages/winner/winner.component';
import { SetCommessionComponent } from './pages/set-commession/set-commession.component';
import { AddmoneyComponent } from './pages/addmoney/addmoney.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { AddPayementGatwayApiComponent } from './pages/add-payement-gatway-api/add-payement-gatway-api.component';
import { TransectionsComponent } from './pages/transections/transections.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminregisterComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    RegisterDistributorComponent,
    UserRegisterComponent,
    LoteryComponent,
    DistrbutorlistComponent,
    UserlistComponent,
    WidComponent,
    WidslistComponent,
    Widslist1Component,
    WidslistbynumComponent,
    WidsforuserComponent,
    WinnerComponent,
    SetCommessionComponent,
    AddmoneyComponent,
    PaymentsuccessComponent,
    AddPayementGatwayApiComponent,
    TransectionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for animations
    NoopAnimationsModule,
    CommonModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
