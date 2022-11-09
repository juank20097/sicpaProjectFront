import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  enterprise=new Enterprise();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Save(){
    this.enterprise.createdDate=new Date();
    this.enterprise.status=true;
    this.service.createEnterprise(this.enterprise).subscribe(data=>{
      alert("Save data successfull!!!");
      this.router.navigate(["list"]);
    })
  }

  Cancel(){
    this.router.navigate(["list"]);
  }

}
