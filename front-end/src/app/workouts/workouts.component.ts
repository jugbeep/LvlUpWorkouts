import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';
import { WorkoutsService } from '../workouts.service';
import { Observable } from 'rxjs/observable/of';



@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})


export class WorkoutsComponent implements OnInit {

  selectedWorkout: Workout;
  workouts: Workouts[];

  constructor(private workoutService: WorkoutsService ) { }

  ngOnInit() {
    this.getWorkouts();
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  getWorkouts(): void {
    this.workouts = this.WorkoutsService.getWorkouts();
  }

}
