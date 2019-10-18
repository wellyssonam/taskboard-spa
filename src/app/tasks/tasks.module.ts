import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { ListTaskComponent } from './components/list';
import { TaskComponent } from './components/task';
import { TaskService } from './services';
import { RegisterTaskComponent } from './components/register';

@NgModule({
  declarations: [
    ListTaskComponent,
    TaskComponent,
    RegisterTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
