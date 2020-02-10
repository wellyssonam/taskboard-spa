import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../../shared';
import { TaskService } from './../../services';


@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.scss']
})
export class RegisterTaskComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;

  task: Task;
  isEditing: boolean;
  titleHeader: string;
  taskId: any;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const keyId = 'id';
    this.taskId = +this.route.snapshot.params[keyId];
    if (isNaN(this.taskId)) {
      const today = new Date().toLocaleDateString('pt-br');
      this.isEditing = false;
      this.task = new Task();
      this.task.date = today;
      this.task.deliveryDate = today;
      this.task.progressBar = 0;
    } else {
      this.isEditing = true;
      this.task = this.taskService.searchTaskById(this.taskId);
    }

    this.titleHeader = this.isEditing ? 'Edit Task' : 'Register Task';
    // const elems = document.querySelectorAll('.datepicker');
    // const instances = M.Datepicker.init(elems, {});
  }

  /**
   * Change date to pt-br format
   * @param $event Information received from the deliveryDate field upon any event occurring on the same
   */
  changeFormatDate($event: any): void {
    this.task.deliveryDate = new Date($event.target.value).toLocaleDateString('pt-br');
  }

  /** Register a new task */
  register(): void {
    if (this.formTask.form.valid) {
      this.taskService.register(this.task);
      this.router.navigate(['/tasks']);
    }
  }

  /** Update task */
  updateTask(): void {
    if (this.formTask.form.valid) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }

  /**
   * Submit Task Form
   * @param $event Event from field
   */
  submitFormTask($event): void {
    $event.preventDefault();
    if (this.formTask.form.valid) {
      this.isEditing ? this.updateTask() : this.register();
    }
  }

  /**
   * Receive event from progress bar
   * @param $event Event from progress bar field involving other component
   */
  receiveProgressBarRef($event): void {
    this.task.progressBar = $event;
  }

}
