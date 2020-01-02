import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const flow: Routes = [
  {path:'',redirectTo:'/log',pathMatch:'full'},
  
  {path:'home',component:HomeComponent}, 
  {path:'about',component:AboutComponent},
  {path:'Contact',component:ContactUsComponent},
  {path:'log',component:LoginComponent},
  {path:'user',component:UserComponent,
  
  children: [
    { path: 'add_d', component:AdddriveComponent},
    { path: 'viewd', component:ViewdriveComponent},
    { path: 'drive', component:UserdriveComponent},
    { path: 'logout', component:LogoutComponent }
    ]
  },
  {path:'admin',component:AdminComponent,
  children: [
    { path: 'add', component:AddemployeeComponent },
    { path: 'view', component:ViewemployeeComponent},
    { path: 'drive', component:AdmindriveComponent},
    { path: 'logout', component:LogoutComponent }
    ]
},

{ path:'update/:i', component:UpdateemployeeComponent},
{ path:'driveup/:j', component:UpdatedriveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(flow)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
