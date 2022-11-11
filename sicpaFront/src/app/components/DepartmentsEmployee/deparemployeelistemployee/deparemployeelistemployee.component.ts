import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsEmployeeService } from 'src/app/services/serviceDepartmentsEmployee/departments-employee.service';
import { DepartmentsEmployee } from 'src/app/models/departmentsEmployee';

@Component({
  selector: 'app-deparemployeelistemployee',
  templateUrl: './deparemployeelistemployee.component.html',
  styleUrls: ['./deparemployeelistemployee.component.css']
})
export class DeparemployeelistemployeeComponent implements OnInit {

  deparEmployees!:DepartmentsEmployee[];
  constructor(private service:DepartmentsEmployeeService, private router:Router) { }

  ngOnInit(): void {
    let id= localStorage.getItem("id");
    if (id!= null){
      this.service.getDepartmentEmployeeByEmployee(+id).subscribe(data=>{
        this.deparEmployees=data;
        console.log(this.deparEmployees);
      })
    }
  }

  Cancel(){
    this.router.navigate(["list_employee"]);
  }

}
