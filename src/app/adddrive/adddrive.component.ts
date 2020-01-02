import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-adddrive',
  templateUrl: './adddrive.component.html',
  styleUrls: ['./adddrive.component.css']
})
export class AdddriveComponent implements OnInit {

  drivetracker: FormGroup;
  constructor(public d: DemoService, private r: Router) { }
  curr=JSON.parse(localStorage.getItem("currentuser"));
  ngOnInit() {
    this.drivetracker = new FormGroup(
      {
        cname: new FormControl('', [Validators.required]),
        driveDate: new FormControl('', [Validators.required]),
        position: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z]{1,32}")]),
        packageOffered: new FormControl('', [Validators.required]),
        vacanciesAvailable: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
        contactPersonDetails: new FormControl('', [Validators.required]),
        email: new FormControl(this.curr.email)
      });
  }

  adrive()
  {
    // console.log(this.drivetracker.value);
    this.d.adddrive(this.drivetracker.value).subscribe(r=> {
    this.r.navigate(['/user/viewd']);
    });
  }

}
