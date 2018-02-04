import { Injectable } from '@angular/core';
import { Workout } from './workouts/workout'
import { WORKOUTS } from './workouts/mock-workouts';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkoutsService {

  

  constructor() { }
  
  getWorkouts(): Observable<Workout[]> {
  	return of(WORKOUTS);
  }
}
