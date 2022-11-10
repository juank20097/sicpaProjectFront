import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/serviceDepartment/department.service';


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments!:Department[];
  constructor(private service:DepartmentService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getDepartment().subscribe(data=>{
      this.departments=data;
    })
  }

  Edit(department:Department):void{
    localStorage.setItem("id",department.id.toString());
    this.router.navigate(["edit_enterprise"]);
  }

  Disable(department:Department){

  }

}
