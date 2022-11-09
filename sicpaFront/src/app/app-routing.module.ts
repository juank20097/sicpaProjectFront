import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Enterprise/list/list.component';
import { AddComponent } from './Enterprise/add/add.component';
import { EditComponent } from './Enterprise/edit/edit.component';

const routes: Routes = [
  {path: 'list',component: ListComponent},
  {path: 'add',component: AddComponent},
  {path: 'edit',component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
