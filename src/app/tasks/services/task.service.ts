import { Injectable } from '@angular/core';

import { Task } from './../../shared';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  keyTasks = 'tasks';

  constructor() { }

  /**
   * return Lista all tasks
   */
  listAll(): Task[] {
    const tasks = localStorage[this.keyTasks];
    return tasks ? JSON.parse(tasks) : [];
  }

  /**
   * Register a new task
   */
  register(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage[this.keyTasks] = JSON.stringify(tasks);
  }

}
