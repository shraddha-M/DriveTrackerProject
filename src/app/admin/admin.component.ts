import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private r:Router) { }
  temp:any={};
  ngOnInit()
  {
   this.temp=JSON.parse(localStorage.getItem("currentuser"));
  }
  goback()
  {
    localStorage.removeItem("currentuser");
    this.r.navigate(['/log']);
  }

}
