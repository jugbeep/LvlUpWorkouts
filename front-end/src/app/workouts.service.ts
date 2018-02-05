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
        tap(workouts => this.log(`got workouts`)),
        catchError(this.handleError('getWorkouts', []))
        );
  }
   
  getWorkout(id: number): Observable<Workout> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.get<Workout>(url).pipe(
      tap(_ => this.log(`found workout id=${id}`))
      );
  }

  save(workout: Workout): Promise<Workout> {
    if (workout.id) {
      return this.put(workout);
    }
    return this.post(workout)
  }

  delete(workout: Workout): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.workoutsUrl}/${workout.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(workout: Workout): Promise<Workout> {
    const headers = new Headers({ 
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.workoutsUrl, JSON.stringify(workout), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(workout: Workout): Promise<Workout> {
    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');

    const url = `${this.workoutsUrl}/${workout.id}`;

    return this.http
      .put(url, JSON.stringify(workout), { headers: headers })
      .toPromise()
      .then(() => workout)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error: ', error);
    return Promise.reject(error.message || error);
  }

  private log(message: string) {
    console.log(message);
  }
}







