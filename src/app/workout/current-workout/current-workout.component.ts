import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopWorkoutComponent } from './stop-workout.component';

@Component({
  selector: 'app-current-workout',
  templateUrl: './current-workout.component.html',
  styleUrls: ['./current-workout.component.css']
})
export class CurrentWorkoutComponent implements OnInit {
  @Output() exerciseExit = new EventEmitter<void>();
  progress = 0;
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopWorkoutComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exerciseExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
