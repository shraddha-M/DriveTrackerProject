import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public hc:HttpClient) {}

  Adddata(value)
  {
    
    return this.hc.post("http://localhost:8081/MyDriveTracker/AddEmployee",value);
   
  }

  Viewdata()
  {
    return this.hc.get("http://localhost:8081/MyDriveTracker/ViewDrive");
  }

  deletedata(x)
  {
    return this.hc.post("http://localhost:8081/MyDriveTracker/DeleteEmployee",x);
  }

  deletedrive(x)
  {
    return this.hc.post("http://localhost:8081/MyDriveTracker/DeleteDrive",x);
  }

  updatedata(x)
  {    
    return this.hc.post("http://localhost:8081/MyDriveTracker/EditEmployee",x);
  }
  updatedrive(x)
  {    
    return this.hc.post("http://localhost:8081/MyDriveTracker/EditDrive",x);
  }

  chklogin(x)
  {
    return this.hc.post("http://localhost:8081/MyDriveTracker/LoginServlet",x);
  }

  adddrive(x)
  {
    return this.hc.post("http://localhost:8081/MyDriveTracker/AddDrive",x);
  }

  viewEmp()
  {
    return this.hc.get("http://localhost:8081/MyDriveTracker/ViewEmployee");
  }

  getalldrives()
  {
      
  }

 

}
