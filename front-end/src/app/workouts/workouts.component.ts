import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Workout } from './workout';
>>>>>>> 938618492e121d0130e9b0fe3c3ef2c6bbff058e

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

<<<<<<< HEAD
=======
  workout: Workout = {
  	id: 1,
  	name: 'Squat'
  };
  
>>>>>>> 938618492e121d0130e9b0fe3c3ef2c6bbff058e
  constructor() { }

  ngOnInit() {
  }

}
