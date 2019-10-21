import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListTaskComponent } from './list-task.component';
import { TaskComponent } from '../task';
import { TaskService } from './../../services';
import { Task } from '../../../shared';

describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;
  let tasks: Task[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ListTaskComponent,
        TaskComponent
      ],
      providers: [TaskService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  tasks = [
    new Task(1, 'test #1', null, null, 100),
    new Task(2, 'test #2', null, null, 100)
  ];

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // empty task list
  it('no tasks registered', () => {
    // empty tasks
    localStorage.clear();
    expect(component.listAll().length).toEqual(0);
  });

  // list all tasks
  it('Test list all tasks', () => {
    const service: TaskService = TestBed.get(TaskService);
    localStorage.clear();

    component.tasks = component.listAll();
    expect(component.tasks.length).toEqual(0);

    // adding tasks to the list
    service.register(tasks[0]);
    component.tasks = component.listAll();
    expect(component.tasks.length).toEqual(1);
    expect(component.tasks[0].name).toEqual('test #1');
  });
});
