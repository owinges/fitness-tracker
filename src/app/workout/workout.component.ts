import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  ongoingExercise: Boolean = false;
  exerciseSubscription: Subscription;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.exerciseSubscription = this.workoutService.exerciseChanged.subscribe(
      exercise => {
        if (exercise) {
          this.ongoingExercise = true;
        } else {
          this.ongoingExercise = false;
        }
      }
    );
  }

}
