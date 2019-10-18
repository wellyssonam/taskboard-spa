import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { ListTaskComponent } from './components/list';
import { TaskComponent } from './components/task';

@NgModule({
  declarations: [
    ListTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TasksModule { }
