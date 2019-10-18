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
    const service: TaskService = TestBed.get(TaskService);
    expect(service.listAll().length).toEqual(0);
  });

  // list all tasks
  // TODO: Fazer após ser possível cadastrar pelo service
  // it('Test by adding tasks and listing them all', () => {
  //   const service: TaskService = TestBed.get(TaskService);
  //   expect(service.listAll().length).toEqual(0);
  // });
});
