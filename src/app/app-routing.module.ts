import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UndoneComponent} from './undone/undone.component';
import {DoneComponent} from './done/done.component';

const routes: Routes = [{
  path: 'list',
  component: UndoneComponent
}, {
  path: 'done',
  component: DoneComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
