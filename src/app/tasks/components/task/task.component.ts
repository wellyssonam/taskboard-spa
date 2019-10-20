import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../shared';
import * as M from 'materialize-css';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() keyTask: number;
  dataTargetTask: string;

  constructor() { }

  ngOnInit() {
    this.dataTargetTask = 'dropdown-task-options' + this.keyTask;
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {
      coverTrigger: false
    });
  }

}
