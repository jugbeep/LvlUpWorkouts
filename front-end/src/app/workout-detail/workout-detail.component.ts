import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../workouts/workout'

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit {

  @Input() workout: Workout;

  constructor() { }

  ngOnInit() {
  }

}
