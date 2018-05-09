import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WorkoutService } from '../workout.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.exercises = this.workoutService.getAvailableExercises();
  }

  onStartExercise(form: NgForm) {
    this.workoutService.startExercise(form.value.exercise);
  }
}
