import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { DepartmentsEmployee } from 'src/app/models/departmentsEmployee';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsEmployeeService {

  private _refresh$ = new Subject<void>();
  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/departmentemployee';

  get refresh$(){
    return this._refresh$;
  }

  getDepartmentEmployee(): Observable<any>{
    return this.http.get<DepartmentsEmployee[]>(this.Url);
  }


  createDepartmentEmployee(department:DepartmentsEmployee): Observable<any>{
    return this.http.post<DepartmentsEmployee>(this.Url,department).pipe(
      tap(() =>{
        this._refresh$.next();
      })
    );
  }

  getDepartmentEmployeeId(id:string): Observable<any>{
    return this.http.get<DepartmentsEmployee>(this.Url+"/"+id);
  }

  updateDepartmentEmployee(department:DepartmentsEmployee): Observable<any>{
    return this.http.put<DepartmentsEmployee>(this.Url+"/"+department.id,department);
  }

  getDepartmentEmployeeByDepartment(id:string): Observable<any>{
    return this.http.get<DepartmentsEmployee>(this.Url+"/department/"+id);
  }

  getDepartmentEmployeeByEmployee(id:string): Observable<any>{
    return this.http.get<DepartmentsEmployee>(this.Url+"/employee/"+id);
  }
}
