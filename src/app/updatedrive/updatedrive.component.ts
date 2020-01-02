import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedrive',
  templateUrl: './updatedrive.component.html',
  styleUrls: ['./updatedrive.component.css']
})
export class UpdatedriveComponent implements OnInit {

  constructor(public sc: DemoService,private a:ActivatedRoute,private r:Router) { }

  tp:number;
  lib: any[] = [];

  list:any={}; 
 
  ngOnInit() {

    this.tp=this.a.snapshot.params['j'];

    this.sc.Viewdata().subscribe((d: any) =>
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

  adrive()
  {
    
    this.sc.updatedrive(this.list).subscribe(d=>
      {
         alert("updated successfully");
         this.r.navigate(['/user/viewd']);
      });   

  }


}
