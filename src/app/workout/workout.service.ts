import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class WorkoutService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 10 },
        { id: 'pushups', name: 'Push-ups', duration: 20, calories: 20 },
        { id: 'lunges', name: 'Lunges', duration: 40, calories: 30 },
        { id: 'burpees', name: 'Burpees', duration: 30, calories: 40 }
    ];

    private activeExercise: Exercise;
    private exercises: Exercise[] = [];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
        this.activeExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.activeExercise });
    }

    completeExercise() {
        this.exercises.push({
            ...this.activeExercise,
            date: new Date(),
            state: 'completed'
        });
        this.activeExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.activeExercise,
            duration: this.activeExercise.duration * (progress / 100),
            calories: this.activeExercise.calories * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.activeExercise = null;
        this.exerciseChanged.next(null);
    }

    getActiveExercise() {
        return { ...this.activeExercise };
    }

    getCompletedOrCancelledExercises() {
        return this.exercises.slice();
    }
}
