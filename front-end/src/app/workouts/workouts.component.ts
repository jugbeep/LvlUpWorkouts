import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from './workout';
import { WorkoutsService } from '../workouts.service';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})

export class WorkoutsComponent implements OnInit {

  workouts: Workout[];
  selectedWorkout: Workout;
  addingWorkout: boolean;
  error: any;


  constructor(
    private workoutsService: WorkoutsService,
    private router: Router) { }

  getWorkouts(): void {
    this.workoutsService
        .getWorkouts()
        .then(workouts => this.workouts = workouts)
        .catch(error => this.error = error);
  }

  addWorkout(): void {
    this.addingWorkout = true;
    this.selectedWorkout = null;
  }

  close(savedWorkout: Workout): void {
    this.addingWorkout = false;
    if (savedWorkout) { this.getWorkouts(); }
  }

  deleteWorkout(workout: Workout, event: any): void {
    event.stopPropagnation();
    this.workoutsService
    .delete(workout)
    .then(res => {
      this.workouts = this.workouts.filter(w => w !== workout);
      if (this.selectedWorkout === workout) { this.selectedWorkout = null; }
    })
    .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
    this.addingWorkout = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWorkout.id])
  }
}
