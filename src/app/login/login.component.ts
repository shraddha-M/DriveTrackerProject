import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private d:DemoService,private r:Router) { }

res:any={};
  add(x){

    this.d.chklogin(x).subscribe(r=>{
      this.res=r;
      if(this.res.status=='user')
      {
        alert("successfully Login");
        localStorage.setItem("currentuser",JSON.stringify(x));
        this.r.navigate(['/user']);
      }
      else if(this.res.status=='admin')
      {
        alert("admin login");
        localStorage.setItem("currentuser",JSON.stringify(x));
        this.r.navigate(['/admin']);
      }
      else
      {
        alert("please enter valid username and password");
      }
    });

  
  }
  


}
