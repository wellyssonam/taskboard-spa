import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from '../../shared';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

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
    service.register(new Task(null, 'Test #1', null, null, 100, 'completed'));
    listTasks = service.listAll();
    expect(listTasks.length).toEqual(1);
    expect(service.listAll()[0].name).toEqual('Test #1');
  });
});
