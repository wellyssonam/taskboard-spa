import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  showTaskOptions: boolean;

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false
    });
  }

}
