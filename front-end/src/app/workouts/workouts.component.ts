import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Workout } from './workout';
>>>>>>> 938618492e121d0130e9b0fe3c3ef2c6bbff058e
=======
import { Workout } from './workout';

>>>>>>> 9de8ff30a2785a2f36727b07760af518f03c69d7

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 9de8ff30a2785a2f36727b07760af518f03c69d7
  workout: Workout = {
  	id: 1,
  	name: 'Squat'
  };
  
<<<<<<< HEAD
>>>>>>> 938618492e121d0130e9b0fe3c3ef2c6bbff058e
=======

>>>>>>> 9de8ff30a2785a2f36727b07760af518f03c69d7
  constructor() { }

  ngOnInit() {
  }

}
