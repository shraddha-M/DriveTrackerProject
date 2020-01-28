import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  drivetracker: FormGroup;
  constructor(public d: DemoService, private r: Router) { }
  ngOnInit() {
    this.drivetracker = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
        mobno: new FormControl('', [Validators.required, Validators.minLength(10)])
      });
  }



  tp:string=null;

  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  lengthOfCode = 8;
  
  onKeyup()
  {
   this.tp=this.makeRandom(this.lengthOfCode,this.possible);
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++)
     {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
     }
      return text;
  }
 

  drive: any;
  //,Validators.pattern("/^[a-zA-z]$/")
  //,Validators.pattern("/^[7-9][0-9]{9}$/")
  addlib() {
    // this.sc.Adddata(this.drivetracker.value).subscribe((a:any)=>this.drivetracker=a,(err)=>console.log("error"));
    //  console.log(this.drivetracker.value)
    this.d.Adddata(this.drivetracker.value).subscribe((d => this.my(d)))
  }

  my(d) {
    if (d.Msg == "successfully") {
      alert("successfully added");
      this.r.navigate(['/admin/view']);
    }
    else {
      alert("not successfully");
    }
  }



}
