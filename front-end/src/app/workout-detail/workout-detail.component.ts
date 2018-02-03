import { Component, OnInit, Input } from '@angular/core';
//import { Workout } from '../workouts/workout'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Workout } from '../data-model';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent {

  workoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
  	this.createForm();
  }

  createForm() {
  	this.workoutForm = this.fb.group({
  		name: ['', Validators.required ],
  	});
  }
};
 
