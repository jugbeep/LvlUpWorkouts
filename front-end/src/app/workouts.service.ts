import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Workout } from './workouts/workout';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkoutsService {
  
  private workoutsUrl = 'api/workouts';

  constructor(
    private http: HttpClient,
  ) { }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutsUrl)
      .pipe(
        tap(workouts => this.log(`got some workouts`)),
        catchError(this.handleError('getWorkouts', []))
        );
  }
   
  getWorkout(id: number): Observable<Workout> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.get<Workout>(url).pipe(
      tap(_ => this.log(`found workout id=${id}`)),
      catchError(this.handleError<Workout>(`getWorkout id=${id}`))
      );
  }

  // save(workout: Workout): Promise<Workout> {
  //   if (workout.id) {
  //     return this.put(workout);
  //   }
  //   return this.post(workout)
  // }

  updateWorkout(workout: Workout): Observable<any> {
    return this.http.put(this.workoutsUrl, workout, httpOptions).pipe(
      tap(_ => this.log(`updated workout id=${workout.id}`)),
      catchError(this.handleError<any>('updateWorkout'))
      );
  }

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.workoutsUrl, workout, httpOptions).pipe(
      tap((workout: Workout) => this.log(`added workout w/ id=${workout.id}`)),
      catchError(this.handleError<Workout>('addWorkout'))
      );
  }

  deleteWorkout(workout: Workout | number): Observable<Workout> {
    const id = typeof workout === 'number' ? workout : workout.id;
    const url = `${this.workoutsUrl}/${id}`;

    return this.http.delete<Workout>(url, httpOptions).pipe(
      tap(_ => this.log(`delete workout id=${id}`)),
      catchError(this.handleError<Workout>('deleteWorkout'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  } 
  

  private log(message: string) {
    console.log(message);
  }
}







