import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  
    
  constructor(public sc: DemoService,private a:ActivatedRoute,private r:Router) { }

  tp:number;
  lib: any[] = [];

  list:any={}; 
 
  ngOnInit() {

    this.tp=this.a.snapshot.params['i'];

    this.sc.viewEmp().subscribe((d: any) =>
    {
      this.lib = d

      for(let i=0;i<this.lib.length;i++)
      {
        if(i==this.tp)
        {
          this.list=this.lib[i];
          break;
        }
      }
    });

 
  }

  addlib()
  {
    
    this.sc.updatedata(this.list).subscribe(d=>
      {
         alert("updated successfully");
         this.r.navigate(['/admin/view']);
      });   

  }


}
