import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-admindrive',
  templateUrl: './admindrive.component.html',
  styleUrls: ['./admindrive.component.css']
})
export class AdmindriveComponent implements OnInit {

  constructor(private d:DemoService) { }

  res:any[]=[];
  arr:any[]=[];
  ngOnInit() {
 
  this.d.Viewdata().subscribe((r:any)=>
  {
    this.res=r;
    for(let i=0;i<this.res.length;i++)
    {
       this.arr.push(this.res[i].contactPersonDetails);
    }
  });

  }

  temp="all";
  sel(y)
  {
    this.temp=y;
  }

}
