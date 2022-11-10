import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { EnterpriseService } from './services/serviceEnterprise/enterprise.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './services/serviceDepartment/department.service';
import { EmployeeService } from './services/serviceEmployee/employee.service';
import { EmployeelistComponent } from './components/Employee/employeelist/employeelist.component';
import { EmployeeaddComponent } from './components/Employee/employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './components/Employee/employeeedit/employeeedit.component';
import { DepartmenteditComponent } from './components/Department/departmentedit/departmentedit.component';
import { DepartmentaddComponent } from './components/Department/departmentadd/departmentadd.component';
import { DepartmentlistComponent } from './components/Department/departmentlist/departmentlist.component';
import { EnterpriselistComponent } from './components/Enterprise/enterpriselist/enterpriselist.component';
import { EnterpriseaddComponent } from './components/Enterprise/enterpriseadd/enterpriseadd.component';
import { EnterpriseeditComponent } from './components/Enterprise/enterpriseedit/enterpriseedit.component';
import { DeparemployeeaddComponent } from './components/DepartmentsEmployee/deparemployeeadd/deparemployeeadd.component';
import { DepartmentsEmployeeService } from './services/serviceDepartmentsEmployee/departments-employee.service';
import { DeparemployeelistdepartmentComponent } from './components/DepartmentsEmployee/deparemployeelistdepartment/deparemployeelistdepartment.component';
import { DeparemployeelistemployeeComponent } from './components/DepartmentsEmployee/deparemployeelistemployee/deparemployeelistemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeaddComponent,
    EmployeeeditComponent,
    DepartmenteditComponent,
    DepartmentaddComponent,
    DepartmentlistComponent,
    EnterpriselistComponent,
    EnterpriseaddComponent,
    EnterpriseeditComponent,
    DeparemployeeaddComponent,
    DeparemployeelistdepartmentComponent,
    DeparemployeelistemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EnterpriseService, DepartmentService, EmployeeService, DepartmentsEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
