import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';
import { WorkoutsService } from '../workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})

export class WorkoutsComponent implements OnInit {

  selectedWorkout: Workout;

  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService ) { }

  ngOnInit() {
    this.getWorkouts();
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  getWorkouts(): void {
    this.workoutsService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts)
  }

}
