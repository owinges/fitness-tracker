import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  @Output() exerciseStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartExercise() {
    this.exerciseStart.emit();
  }
}
