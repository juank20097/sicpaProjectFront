import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddComponent } from './Enterprise/add/add.component';
import { EditComponent } from './Enterprise/edit/edit.component';
import { ListComponent } from './Enterprise/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sicpaFront';

  constructor(private router:Router){}

    List(){
      this.router.navigate(["list"]);
    }
    Add(){
      this.router.navigate(["add"]);
    }
    Edit(){
      this.router.navigate(["edit"]);
    }

  }
