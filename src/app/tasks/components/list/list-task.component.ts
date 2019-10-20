import { Component, OnInit } from '@angular/core';

import { Task } from '../../../shared';
import { TaskService } from '../../services';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  // showTaskOptions: boolean;
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.listAll();
  }

  /** return Lista all tasks */
  listAll(): Task[] {
    return this.taskService.listAll();
  }

}
