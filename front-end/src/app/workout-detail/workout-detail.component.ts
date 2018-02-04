import { Component, OnChanges, Input } from '@angular/core';
//import { Workout } from '../workouts/workout'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Workout } from '../data-model';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnChanges{

  @Input() workout: Workout;

  workoutForm: FormGroup;


  constructor(
  	private fb: FormBuilder,
  	private workoutService: WorkoutsService) {


  	this.createForm();

  }

  createForm() {
  	this.workoutForm = this.fb.group({
  		name: ['', Validators.required ],
  	});
  }

  ngOnChanges() {
  	this.workoutForm.reset({
  		name: this.workout.name
  	});
  }

  onSubmit() {
  	this.workout = this.prepareSaveWorkout();
  	this.workoutService.updateWorkout(this.workout).subscribe();
  	this.ngOnChanges()  
  }
  
  prepareSaveWorkout(): Workout {
  	const formModel = this.workoutForm.value;
  	console.log(this.workoutForm.value)
  	const saveWorkout: Workout = {
  	  id: this.workout.id,
  	  name: formModel.name as string
  	};
  	return saveWorkout;
  }

};
 
