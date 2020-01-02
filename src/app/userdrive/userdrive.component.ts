import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-userdrive',
  templateUrl: './userdrive.component.html',
  styleUrls: ['./userdrive.component.css']
})
export class UserdriveComponent implements OnInit {

  constructor(private d: DemoService) { }
  arr: any[] = [];
  res: any[] = [];

  ngOnInit() 
  {

    this.d.Viewdata().subscribe((r: any) =>
     {
      this.res = r;
      for (let i = 0; i < this.res.length; i++) {
        this.arr.push(this.res[i].contactPersonDetails);
      }
    });
  }

  temp = "all";
  sel(y) {
    this.temp = y;
  }
}
