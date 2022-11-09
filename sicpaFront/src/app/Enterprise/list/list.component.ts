import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  enterprises!:Enterprise[];
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getEnterprise().subscribe(data=>{
      this.enterprises=data;
    })
  }

  Edit(enterprise:Enterprise):void{
    localStorage.setItem("id",enterprise.id.toString());
    this.router.navigate(["edit"]);
  }

  Disable(enterprise:Enterprise){

  }
}
