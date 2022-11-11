import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Department } from 'src/app/models/department';
import { Enterprise } from 'src/app/models/enterprise';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/department';
  Url2= 'http://localhost:8080/enterprise';

  getDepartment(){
    return this.http.get<Department[]>(this.Url);
  }

  getEnterprise(){
    return this.http.get<Enterprise[]>(this.Url2);
  }

  getEnterpriseId(id:number){
    return this.http.get<Enterprise>(this.Url2+"/"+id);
  }

  createDepartment(department:Department){
    return this.http.post<Department>(this.Url,department);
  }

  getDepartmentId(id:number){
    return this.http.get<Department>(this.Url+"/"+id);
  }

  updateDepartment(department:Department){
    return this.http.put<Department>(this.Url+"/"+department.id,department);
  }
}
