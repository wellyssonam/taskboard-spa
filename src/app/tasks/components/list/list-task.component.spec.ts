import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent } from './list-task.component';
import { TaskComponent } from '../task';
import { TaskService } from '../../services';
import { Task } from '../../../shared';

describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;
  let tasks: Task[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListTaskComponent,
        TaskComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  tasks = [
    new Task(1, 'test #1', new Date(), new Date(2019, 2, 1), 100, 'completed'),
    new Task(2, 'test #2', new Date(), new Date(2019, 2, 2), 100, 'completed')
  ];

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // empty task list
  it('no tasks registered', () => {
    // empty tasks
    expect(component.tasks.length).toEqual(0);
    expect(component.listAll().length).toEqual(0);
  })
  
  // list all tasks
  // TODO: Fazer após ser possível cadastrar pelo service
  it('Test list all tasks', () => {
    // adding tasks to the list
    // component.tasks = tasks;
    // console.log(component.listAll())
    // expect(component.tasks.length).toEqual(2);
    // expect(component.listAll().length).toEqual(2);
  })
});
