import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Enterprise } from '../models/enterprise';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/enterprise';

  getEnterprise(){
    return this.http.get<Enterprise[]>(this.Url);
  }

  createEnterprise(enterprise:Enterprise){
    return this.http.post<Enterprise>(this.Url,enterprise);
  }

  getEnterpriseId(id:number){
    return this.http.get<Enterprise>(this.Url+"/"+id);
  }

  updateEnterprise(enterprise:Enterprise){
    return this.http.put<Enterprise>(this.Url+"/"+enterprise.id,enterprise);
  }
}
