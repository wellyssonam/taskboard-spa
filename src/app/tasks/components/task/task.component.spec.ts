import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TaskComponent } from './task.component';
import { Task } from '../../../shared';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskComponent
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create existing task', () => {
    let task: Task;
    const compiled = fixture.debugElement.nativeElement;

    task = new Task(1, 'test #1', null, new Date(2019, 2, 1).toLocaleDateString('pt-br'), 100, 'completed');
    component.task = task;
    fixture.detectChanges();

    expect(component.task.id).toBe(1);
    expect(component.task.name).toBe('test #1');
    expect(component.task.deliveryDate).toEqual('01/03/2019');
    expect(component.task.progressBar).toBe(100);
    expect(component.task.status).toBe('completed');

    expect(compiled.querySelector('.name').textContent).toContain('test #1');
    expect(compiled.querySelector('.status').textContent).toContain('completed');
  });
});
