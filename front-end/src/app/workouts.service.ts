import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Workout, workouts } from './data-model';

@Injectable()
export class WorkoutsService {

  

  constructor(
  ) { }
  
  getWorkouts(): Observable<Workout[]> {
  	return of(workouts);
  }

  updateWorkout(workout: Workout): Observable <Workout> {
  	const oldWorkout = workouts.find(w => w.id === workout.id);
  	const newWorkout = Object.assign(oldWorkout, workout);
  	  return of(newWorkout);
  }
}
