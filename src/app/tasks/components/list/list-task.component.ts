import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
import * as $ from 'jquery';
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

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false
    });
  }

  /**
   * return Lista all tasks
   */
  listAll(): Task[] {
    return this.taskService.listAll();
  }

}
