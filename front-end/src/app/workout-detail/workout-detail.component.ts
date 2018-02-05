import { Component, OnChanges, Input, EventEmitter, Output, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Workout } from '../workouts/workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit{

  @Input() workout: Workout;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private workoutService: WorkoutsService,
    private route: ActivatedRoute)
    { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params)=> {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.workoutService.getWorkout(id)
            .then(workout => this.workout = workout)
      } else {
        this.navigated = false;
        this.workout = new Workout();
      }
    });
  }
 
  save(): void {
    this.workoutService.updateWorkout(this.workout)
      .subscribe(() => this.goBack());
  }

  goBack(savedWorkout: Workout = null): void {
    this.close.emit(savedWorkout);
    if (this.navigated) { window.history.back(); }
  }
}