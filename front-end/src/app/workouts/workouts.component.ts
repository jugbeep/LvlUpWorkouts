import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {


  workout: Workout = {
  	id: 1,
  	name: 'Squat'
  };
  

  constructor() { }

  ngOnInit() {
  }

}
