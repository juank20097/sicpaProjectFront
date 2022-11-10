import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/serviceEmployee/employee.service';


@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  employee=new Employee();
  constructor(private router:Router, private service:EmployeeService) { }

  ngOnInit(): void {
  }

  Save(){
    this.employee.createdDate=new Date();
    this.employee.status=true;
    this.service.createEmployee(this.employee).subscribe(data=>{
      alert("Save data successfull!!!");
      this.router.navigate(["list_employee"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_employee"]);
  }

}
