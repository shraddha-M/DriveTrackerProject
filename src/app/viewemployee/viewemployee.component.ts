import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(public sc: DemoService) { }

  lib: any[] = [];
  ngOnInit() {   
this.fetchdata();
  }

  
  obj: any = {};
  deleteData(i) {

    this.obj.id = this.lib[i].id;
    console.log(this.obj.id);

    this.sc.deletedata(this.obj).subscribe(d=>
      {

        alert("deleted successfully")
        this.fetchdata();
    });
    
  }
  fetchdata()
  {
    this.sc.viewEmp().subscribe((d: any) => this.lib = d);
  }


  sendMail(i)
  {
     this.obj=this.lib[i];
     
     this.sc.sendMail(this.obj).subscribe();
  
    }
    









}
