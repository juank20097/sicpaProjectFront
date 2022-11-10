import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EnterpriseService } from 'src/app/services/serviceEnterprise/enterprise.service';

@Component({
  selector: 'app-enterpriseadd',
  templateUrl: './enterpriseadd.component.html',
  styleUrls: ['./enterpriseadd.component.css']
})
export class EnterpriseaddComponent implements OnInit {

  enterprise=new Enterprise();
  constructor(private router:Router, private service:EnterpriseService) { }

  ngOnInit(): void {
  }

  Save(){
    this.enterprise.createdDate=new Date();
    this.enterprise.status=true;
    this.service.createEnterprise(this.enterprise).subscribe(data=>{
      alert("Save data successfull!!!");
      this.router.navigate(["list_enterprise"]);
    })
  }

  Cancel(){
    this.router.navigate(["list_enterprise"]);
  }

}
