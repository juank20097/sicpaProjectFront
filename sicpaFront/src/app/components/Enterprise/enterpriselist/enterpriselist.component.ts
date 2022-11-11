import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EnterpriseService } from 'src/app/services/serviceEnterprise/enterprise.service';

@Component({
  selector: 'app-enterpriselist',
  templateUrl: './enterpriselist.component.html',
  styleUrls: ['./enterpriselist.component.css']
})
export class EnterpriselistComponent implements OnInit {

  enterprises!:Enterprise[];
  constructor(private service:EnterpriseService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getEnterprise().subscribe(data=>{
      this.enterprises=data;
    })
  }

  Edit(enterprise:Enterprise):void{
    localStorage.setItem("id",enterprise.id.toString());
    this.router.navigate(["edit_enterprise"]);
  }

  Change(enterprise:Enterprise){
    localStorage.setItem("id",enterprise.id.toString());
    enterprise.status = false;
    this.service.updateEnterprise(enterprise).subscribe(data=>{
      this.enterprises=this.enterprises.filter(p=>p!==enterprise);
    })
  }

}
