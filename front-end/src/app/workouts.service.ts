import { Injectable } from '@angular/core';
import { Workout } from './workouts/workout'
import { WORKOUTS } from './workouts/mock-workouts';

@Injectable()
export class WorkoutsService {

  

  constructor() { }
  
  getWorkouts(): Workout[] {
  	return WORKOUTS
  }
}
