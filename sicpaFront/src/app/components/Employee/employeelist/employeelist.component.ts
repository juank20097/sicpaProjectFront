import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/serviceEmployee/employee.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees!:Employee[];
  constructor(private service:EmployeeService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(data=>{
      this.employees=data;
    })
  }

  Edit(employe:Employee):void{
    localStorage.setItem("id",employe.id.toString());
    this.router.navigate(["edit_employee"]);
  }

  Change(employee:Employee){
    employee.status = false;
    this.service.updateEmployee(employee).subscribe(data=>{
      this.employees=this.employees.filter(p=>p!==employee);
    })
  }

  AddDepartmentsEmployee(employe:Employee):void{
    localStorage.setItem("id",employe.id.toString());
    this.router.navigate(["add_depar_employee"]);
  }

}
