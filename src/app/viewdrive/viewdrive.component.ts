import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-viewdrive',
  templateUrl: './viewdrive.component.html',
  styleUrls: ['./viewdrive.component.css']
})
export class ViewdriveComponent implements OnInit {

  constructor(private sc:DemoService) { }

  res:any[]=[];
  ngOnInit() { 
    this.fetchdata();
  }

  obj:any={};
  temp=JSON.parse(localStorage.getItem("currentuser")).email;

  fetchdata()
  {
     this.sc.Viewdata().subscribe((r:any)=>this.res=r);
  }
  deleteData(i)
  {
    this.obj.driveId = this.res[i].driveId;
    console.log(this.obj.driveId);

    this.sc.deletedrive(this.obj).subscribe(d=>
      {
        alert("deleted successfully")
        this.fetchdata();
    });
  }

}
