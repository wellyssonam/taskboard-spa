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
    // this.tasks = [
    //   new Task(1, 'test #1', new Date(), new Date(), 100, 'completed'),
    //   new Task(2, 'test #2', new Date(), new Date(), 100, 'completed')
    // ];
    this.tasks = this.listAll();  
  }

  /** return Lista all tasks */
  listAll(): Task[] {
    return this.taskService.listAll();
  }

}
