import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/serviceDepartment/department.service';


@Component({
  selector: 'app-departmentedit',
  templateUrl: './departmentedit.component.html',
  styleUrls: ['./departmentedit.component.css']
})
export class DepartmenteditComponent implements OnInit {

  department:Department=new Department();
  constructor(private router:Router, private service:DepartmentService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.service.getDepartmentId(+id).subscribe(data=>{
        this.department=data;
      })
    }
  }

  Update(department:Department){
    this.department.modifiedDate = new Date();
    this.service.updateDepartment(department).subscribe(data=>{
      this.department=data;
      alert("Update Data Successfull...!!!");
      this.router.navigate(["list_department"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_department"]);
  }

}
