import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ListTaskComponent } from './components/list';
import { TaskComponent } from './components/task';
import { TaskService } from './services';
import { RegisterTaskComponent } from './components/register';
import { ProgressBarComponent } from '../shared';
import { EditTaskComponent } from './components/edit';

@NgModule({
  declarations: [
    ListTaskComponent,
    TaskComponent,
    RegisterTaskComponent,
    ProgressBarComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
