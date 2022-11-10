import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/models/department';
import { DepartmentsEmployee } from 'src/app/models/departmentsEmployee';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/serviceDepartment/department.service';
import { DepartmentsEmployeeService } from 'src/app/services/serviceDepartmentsEmployee/departments-employee.service';
import { EmployeeService } from 'src/app/services/serviceEmployee/employee.service';

@Component({
  selector: 'app-deparemployeeadd',
  templateUrl: './deparemployeeadd.component.html',
  styleUrls: ['./deparemployeeadd.component.css']
})
export class DeparemployeeaddComponent implements OnInit , OnDestroy {

  deparEmployee:DepartmentsEmployee= new DepartmentsEmployee();
  departments!:Department[];
  employees!:Employee[];
  deparEmployees!: DepartmentsEmployee[];
  suscription!:  Subscription;
  constructor(private router:Router, private serviceEmployee:EmployeeService, private serviceDepartment:DepartmentService, private serviceDeparEmployee:DepartmentsEmployeeService) { }

  ngOnInit(): void {
    this.AddEmployee();
    this.AddDepartment();
    this.serviceDepartment.getDepartment().subscribe(data=>{
      this.departments=data;
    })
    this.serviceEmployee.getEmployee().subscribe(data=>{
      this.employees=data;
    })
    this.serviceDeparEmployee.getDepartmentEmployee().subscribe(data=>{
      this.deparEmployees=data;
    })
    this.suscription = this.serviceDeparEmployee.refresh$.subscribe(() =>{
      this.serviceDeparEmployee.getDepartmentEmployee().subscribe(data=>{
        this.deparEmployees=data;
      })
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  Save(){
    this.deparEmployee.createdDate=new Date();
    this.deparEmployee.status=true;
    this.serviceDeparEmployee.createDepartmentEmployee(this.deparEmployee).subscribe(data=>{
      alert("Save data successfull!!!");
    this.deparEmployees=this.deparEmployees.filter(p=>p!==null);
    })
  }

  AddEmployee(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.serviceEmployee.getEmployeeId(+id).subscribe(data=>{
        this.deparEmployee.employee=data;
      })
    }
  }

  AddDepartment(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.serviceDepartment.getDepartmentId(+id).subscribe(data=>{
        this.deparEmployee.department=data;
      })
    }
  }

  CompareDeparment(e1: Department,e2: Department): boolean{
    if (e1 === undefined && e2 === undefined) return true;
    return e1 === null || e2 === null || e1 === undefined || e2 === undefined ? false: e1.id == e2.id;
  }

  CompareEmployee(e1: Employee,e2: Employee): boolean{
    if (e1 === undefined && e2 === undefined) return true;
    return e1 === null || e2 === null || e1 === undefined || e2 === undefined ? false: e1.id == e2.id;
  }

  Change(department:DepartmentsEmployee){
    department.status = false;
    this.serviceDeparEmployee.updateDepartmentEmployee(department).subscribe(data=>{
      this.deparEmployees=this.deparEmployees.filter(p=>p!==department);
    })
  }

  Disable():boolean{
    if (this.deparEmployee.department !== null){
      return true;
    }else{
      return false;
    }
  }

}
