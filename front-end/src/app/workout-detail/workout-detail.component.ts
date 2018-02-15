import { Component, OnChanges, Input, EventEmitter, Output, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Workout } from '../workouts/workout';
import { WorkoutsService } from '../workouts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit{

  @Input() workout: Workout;

  constructor(
    private workoutService: WorkoutsService,
    private route: ActivatedRoute,
    private location: Location
    )
    { }

  ngOnInit(): void {
    this.getWorkout();
  }

  getWorkout(): void {
    const id = +this.route.snapshot.paramMap.get('id');
      this.workoutService.getWorkout(id)
        .subscribe(workout => this.workout = workout);
  }
 
  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.workoutService.updateWorkout(this.workout, id)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}