import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {ErrorComponent} from "./error/error.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
