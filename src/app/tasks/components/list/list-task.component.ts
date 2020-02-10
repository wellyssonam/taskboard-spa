import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { TaskService } from '../../services';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {

  // showTaskOptions: boolean;
  // tasks$: Observable<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.listAll();
  }

  /** return Lista all tasks */
  listAll() {
    this.taskService.listAll();
  }

  /**
   * Receive updated task list
   * @param $event Event from delete task button involving other component
   */
  receiveTasksRef($event: any): void {
    // this.tasks = $event;
  }

  /**
   * Print in terminal a message after the list task component is mounted
   */
  checkTaskList(): void {
    console.log('1 - check task list');
  }
}
