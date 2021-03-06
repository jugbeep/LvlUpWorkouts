import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

import { Workout } from './workout';
import { WorkoutsService } from '../workouts.service';
import { Observable } from 'rxjs/observable';
import { DbService } from '../db.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})

export class WorkoutsComponent implements OnInit {

  userName:  {};
  workouts: Workout[];
  selectedWorkout: Workout;
  addingWorkout: boolean;
  error: any;


  constructor(
    private workoutsService: WorkoutsService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workoutsService.getWorkouts()
        .subscribe(workouts => this.workouts = workouts);
  }

  // updateWorkout(): void {
  //   this.workoutsService.updateWorkout()
  //       .subscribe(workouts => this.workouts = workouts)
  // }

  add(name: string): void {
     name = name.trim();
     if (!name) { return; }
     this.workoutsService.addWorkout({ name } as Workout)
      .subscribe(workout => { 
      this.workouts.push(workout);
      });
  }

  delete(workout: Workout): void {
    this.workouts = this.workouts.filter(w => w !== workout);
    this.workoutsService.deleteWorkout(workout).subscribe();
  }

  // close(savedWorkout: Workout): void {
  //   this.addingWorkout = false;
  //   if (savedWorkout) { this.getWorkouts(); }
  // }

  // deleteWorkout(workout: Workout, event: any): void {
  //   event.stopPropagnation();
  //   this.workoutsService
  //   .delete(workout)
  //   .then(res => {
  //     this.workouts = this.workouts.filter(w => w !== workout);
  //     if (this.selectedWorkout === workout) { this.selectedWorkout = null; }
  //   })
  //   .catch(error => this.error = error);
  // }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
    this.addingWorkout = false;
  }

  signOut() {
    this.authService.logout();
  }
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedWorkout.id])
  // }
}
