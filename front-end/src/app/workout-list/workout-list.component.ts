import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Workout } from '../workouts/workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(
    private router: Router,
    private workoutService: WorkoutsService) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts()
    // .then(workouts => this.workouts = workouts.slice(1, 5));
  }

  gotoDetail(workout: Workout): void {
    const link = ['/detail', workout.id];
    this.router.navigate(link);
  }
}

