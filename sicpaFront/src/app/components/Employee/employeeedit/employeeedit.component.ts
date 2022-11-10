import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/serviceEmployee/employee.service';


@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private router:Router, private service:EmployeeService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.service.getEmployeeId(+id).subscribe(data=>{
        this.employee=data;
      })
    }
  }

  Update(employee:Employee){
    this.employee.modifiedDate = new Date();
    this.service.updateEmployee(employee).subscribe(data=>{
      this.employee=data;
      alert("Update Data Successfull...!!!");
      this.router.navigate(["list_employee"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_employee"]);
  }

}
