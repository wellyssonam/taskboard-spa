import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progressBar: number;
  @Output() progressBarRef = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendProgressBarRef($event): void {
    this.progressBarRef.emit($event.target.value);
  }

}
