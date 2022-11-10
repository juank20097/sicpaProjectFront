import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sicpaFront';

  constructor(private router:Router){}

    ListEnterprise(){
      this.router.navigate(["list_enterprise"]);
    }
    AddEnterprise(){
      this.router.navigate(["add_enterprise"]);
    }
    EditEnterprise(){
      this.router.navigate(["edit_enterprise"]);
    }
    ListDepartment(){
      this.router.navigate(["list_department"]);
    }
    AddDepartment(){
      this.router.navigate(["add_department"]);
    }
    EditDepartment(){
      this.router.navigate(["edit_department"]);
    }
    ListEmployee(){
      this.router.navigate(["list_employee"]);
    }
    AddEmployee(){
      this.router.navigate(["add_employee"]);
    }
    EditEmployee(){
      this.router.navigate(["edit_employee"]);
    }

  }
