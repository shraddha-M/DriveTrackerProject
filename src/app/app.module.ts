import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AdmindriveComponent } from './admindrive/admindrive.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UserComponent } from './user/user.component';
import { AdddriveComponent } from './adddrive/adddrive.component';
import { ViewdriveComponent } from './viewdrive/viewdrive.component';
import { UserdriveComponent } from './userdrive/userdrive.component';
import { UpdatedriveComponent } from './updatedrive/updatedrive.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    AdmindriveComponent,
    LogoutComponent,
    AdminComponent,
    UpdateemployeeComponent,
    UserComponent,
    AdddriveComponent,
    ViewdriveComponent,
    UserdriveComponent,
    UpdatedriveComponent,
    AboutComponent,
    HomeComponent,
    ContactUsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
