import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {

  @Input() progressBar: number;
  @Output() progressBarRef = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // console.log('progress-bar');
  }

  sendProgressBarRef($event): void {
    this.progressBarRef.emit($event.target.value);
  }

  /**
   * Print in terminal a message after the progress bar component is mounted
   */
  checkProgressBarComponent(): void {
    console.log('3 - check progress bar component');
  }

}
