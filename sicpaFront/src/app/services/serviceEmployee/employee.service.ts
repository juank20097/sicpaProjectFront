import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/employee';

  getEmployee(){
    return this.http.get<Employee[]>(this.Url);
  }

  createEmployee(employee:Employee){
    return this.http.post<Employee>(this.Url,employee);
  }

  getEmployeeId(id:number){
    return this.http.get<Employee>(this.Url+"/"+id);
  }

  updateEmployee(employee:Employee){
    return this.http.put<Employee>(this.Url+"/"+employee.id,employee);
  }
}
