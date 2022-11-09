import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  enterprise:Enterprise=new Enterprise();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("id");
    if (id!= null){
      this.service.getEnterpriseId(+id).subscribe(data=>{
        this.enterprise=data;
      })
    }
  }

  Update(enterprise:Enterprise){
    this.enterprise.modifiedDate = new Date();
    this.service.updateEnterprise(enterprise).subscribe(data=>{
      this.enterprise=data;
      alert("Update Data Successfull...!!!");
      this.router.navigate(["list"]);
    })
  }

  Cancel(){
    this.router.navigate(["list"]);
  }
}
