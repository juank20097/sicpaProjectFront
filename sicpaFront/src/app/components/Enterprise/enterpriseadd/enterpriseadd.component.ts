import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EnterpriseService } from 'src/app/services/serviceEnterprise/enterprise.service';

@Component({
  selector: 'app-enterpriseadd',
  templateUrl: './enterpriseadd.component.html',
  styleUrls: ['./enterpriseadd.component.css']
})
export class EnterpriseaddComponent implements OnInit {

  //validation Form
  enterForm!: FormGroup;

  enterprise=new Enterprise();
  constructor(private router:Router, private service:EnterpriseService) { }

  ngOnInit(): void {
    this.enterForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null,[Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
      'address' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  Save(){
    this.enterprise.name= this.enterForm.value.name;
    this.enterprise.phone = this.enterForm.value.phone;
    this.enterprise.address = this.enterForm.value.address;
    this.enterprise.createdDate=new Date();
    this.enterprise.status=true;
    this.service.createEnterprise(this.enterprise).subscribe(data=>{
      alert("Save data successfull");
      this.router.navigate(["list_enterprise"]);
    })
    this.enterForm.reset();
  }

  Cancel(){
    this.router.navigate(["list_enterprise"]);
  }

}
