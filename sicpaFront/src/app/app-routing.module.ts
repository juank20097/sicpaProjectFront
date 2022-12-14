import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentaddComponent } from './components/Department/departmentadd/departmentadd.component';
import { DepartmenteditComponent } from './components/Department/departmentedit/departmentedit.component';
import { DepartmentlistComponent } from './components/Department/departmentlist/departmentlist.component';
import { DeparemployeeaddComponent } from './components/DepartmentsEmployee/deparemployeeadd/deparemployeeadd.component';
import { EmployeeaddComponent } from './components/Employee/employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './components/Employee/employeeedit/employeeedit.component';
import { EmployeelistComponent } from './components/Employee/employeelist/employeelist.component';
import { EnterpriseaddComponent } from './components/Enterprise/enterpriseadd/enterpriseadd.component';
import { EnterpriseeditComponent } from './components/Enterprise/enterpriseedit/enterpriseedit.component';
import { EnterpriselistComponent } from './components/Enterprise/enterpriselist/enterpriselist.component';
import { DeparemployeelistdepartmentComponent } from './components/DepartmentsEmployee/deparemployeelistdepartment/deparemployeelistdepartment.component';
import { DeparemployeelistemployeeComponent } from './components/DepartmentsEmployee/deparemployeelistemployee/deparemployeelistemployee.component';


const routes: Routes = [
  {path: 'list_enterprise',component: EnterpriselistComponent},
  {path: 'add_enterprise',component: EnterpriseaddComponent},
  {path: 'edit_enterprise',component: EnterpriseeditComponent},
  {path: 'list_department',component: DepartmentlistComponent},
  {path: 'add_department',component: DepartmentaddComponent},
  {path: 'edit_department',component: DepartmenteditComponent},
  {path: 'list_employee',component: EmployeelistComponent},
  {path: 'add_employee',component: EmployeeaddComponent},
  {path: 'edit_employee',component: EmployeeeditComponent},
  {path: 'list_depar_employee_depar',component: DeparemployeelistdepartmentComponent},
  {path: 'add_depar_employee',component: DeparemployeeaddComponent},
  {path: 'list_depar_employee_emplo',component: DeparemployeelistemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
