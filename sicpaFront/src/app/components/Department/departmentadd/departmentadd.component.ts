import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/serviceDepartment/department.service';

@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.css']
})
export class DepartmentaddComponent implements OnInit {

  department=new Department();
  constructor(private router:Router, private service:DepartmentService) { }

  ngOnInit(): void {
  }

  Save(){
    this.department.createdDate=new Date();
    this.department.status=true;
    this.service.createDepartment(this.department).subscribe(data=>{
      alert("Save data successfull!!!");
      this.router.navigate(["list_department"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_department"]);
  }

}
