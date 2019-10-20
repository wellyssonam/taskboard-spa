import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from '../../shared';

describe('TaskService', () => {
  let tasks: Task[];

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  tasks = [
    new Task(1, 'test #1', null, null, 100),
    new Task(2, 'test #2', null, null, 100)
  ];

  // empty task list
  it('no tasks registered', () => {
    localStorage.clear();
    const service: TaskService = TestBed.get(TaskService);
    expect(service.listAll().length).toEqual(0);
  });

  // list all tasks
  it('Test by adding tasks and listing them all', () => {
    localStorage.clear();
    const service: TaskService = TestBed.get(TaskService);
    let listTasks = service.listAll();

    expect(listTasks.length).toEqual(0);
    // Add task to the list
    service.register(new Task(null, 'Test #1', null, null, 100));
    listTasks = service.listAll();
    expect(listTasks.length).toEqual(1);
    expect(service.listAll()[0].name).toEqual('Test #1');
  });

  // Search task by id
  it('Search task  by id', () => {
    const service: TaskService = TestBed.get(TaskService);
    let taskList;
    localStorage.clear();
    expect(service.listAll().length).toBe(0);
    service.register(tasks[0]);
    service.register(tasks[1]);
    taskList = service.listAll();
    expect(taskList.length).toBe(2);
    // it does not find task by id
    expect(service.searchTaskById(0)).toBeUndefined();
    // it finds task by id
    expect(service.searchTaskById(taskList[1].id)).toBeDefined();
  });

  // Update Task
  it('Update Task', () => {
    localStorage.clear();
    const service: TaskService = TestBed.get(TaskService);
    let taskList: Task[];
    service.register(tasks[0]);
    taskList = service.listAll();
    expect(taskList.length).toEqual(1);
    expect(taskList[0].name).toEqual('test #1');
    // Updating the created task
    taskList[0].name = 'test #0001';
    expect(taskList[0].name).toEqual('test #0001');
    service.updateTask(taskList[0]);
    expect(service.searchTaskById(taskList[0].id).name).toEqual('test #0001');
  });

  // Delete task
  it('Delete task', () => {
    const service: TaskService = TestBed.get(TaskService);
    let taskList: Task[];
    localStorage.clear();
    service.register(tasks[0]);
    taskList = service.listAll();
    expect(taskList.length).toEqual(1);
    // delete task
    service.deleteTask(taskList[0].id);
    expect(service.listAll().length).toEqual(0);
  });
});
