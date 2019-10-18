import { Injectable } from '@angular/core';

import { Task } from './../../shared';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /**
   * return Lista all tasks
   */
  listAll(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

}
