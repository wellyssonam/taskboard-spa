import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import M from 'materialize-css';
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

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    const today = new Date().toLocaleDateString('pt-br');
    this.task = new Task();
    this.task.date = today;
    this.task.deliveryDate = today;

    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {});
  }

  /**
   * Change date to pt-br format
   * @param $event Information received from the deliveryDate field upon any event occurring on the same
   */
  changeFormatDate($event: any): void {
    console.log('onchange')
    this.task.deliveryDate = new Date($event.target.value).toLocaleDateString('pt-br');
  }

  /** Register a new task */
  register(): void {
    if (this.formTask.form.valid) {
      this.taskService.register(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
