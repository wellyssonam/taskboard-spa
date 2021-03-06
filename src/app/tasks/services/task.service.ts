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
    return tasks ? JSON.parse(tasks).sort((t1, t2) => t1.deliveryDate > t2.deliveryDate ? 1 : -1) : [];
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

  /**
   * Search task by id
   */
  searchTaskById(id: number): Task {
    return this.listAll().find(task => task.id === id);
  }

  /**
   * Update task
   */
  updateTask(task: Task): void {
    const tasks = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage[this.keyTasks] = JSON.stringify(tasks);
  }

  /**
   * Delete Task
   * @param id Id from the task
   */
  deleteTask(id: number): void {
    const tasks = this.listAll();
    localStorage[this.keyTasks] = JSON.stringify(tasks.filter(obj => obj.id !== id));
  }

}
