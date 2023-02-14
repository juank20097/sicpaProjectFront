import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EnterpriseService } from 'src/app/services/serviceEnterprise/enterprise.service';

@Component({
  selector: 'app-enterpriseedit',
  templateUrl: './enterpriseedit.component.html',
  styleUrls: ['./enterpriseedit.component.css']
})
export class EnterpriseeditComponent implements OnInit {

  enterprise:Enterprise=new Enterprise();
  constructor(private router:Router, private service:EnterpriseService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.service.getEnterpriseId(id).subscribe(data=>{
        this.enterprise=data;
      })
    }
  }

  Update(enterprise:Enterprise){
    this.enterprise.modifiedDate = new Date();
    this.enterprise.modifiedBy="admin";
    this.service.updateEnterprise(enterprise).subscribe(data=>{
      this.enterprise=data;
      alert("Update Data Successfull");
      this.router.navigate(["list_enterprise"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_enterprise"]);
  }

}
