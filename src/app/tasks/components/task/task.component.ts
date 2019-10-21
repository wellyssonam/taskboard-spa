import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../shared';
import * as M from 'materialize-css';
import { TaskService } from './../../services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() keyTask: number;
  @Output() tasksRef = new EventEmitter<any>();

  dataTargetTask: string;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.dataTargetTask = 'dropdown-task-options' + this.keyTask;
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {
      coverTrigger: false
    });
  }

  /**
   * Delete task
   * @param $event Event from delete task button
   * @param task Object with task information
   */
  deleteTask($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Delete this task "' + task.name + '"?')) {
      this.taskService.deleteTask(task.id);
      this.tasksRef.emit(this.taskService.listAll());
    }
  }
}
