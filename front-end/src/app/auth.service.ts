import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(
  	private afAuth: AngularFireAuth,
  	private router: Router,
    private http: Http
    ) { }


  	login(email: string, password: string) {
  	  this.afAuth.auth.signInWithEmailAndPassword(email, password)
  	  .then(value => {
  		console.log('Nice, log in works!');
  		this.router.navigateByUrl('/workouts');
  		})
  	  .catch(err => {
  		console.log('something went wrong: ', err.message);
      alert('Try again');
  		});
    }

  	emailSignup(email: string, password: string) {
    
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success', value);
      this.router.navigateByUrl('/workouts')
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
      alert('Try again');
      });
    }

  	googleLogin() {
   	  const provider = new firebase.auth.GoogleAuthProvider();
   	  return this.oAuthLogin(provider)
      .then(value => {
        console.log('Success', value),
      this.router.navigateByUrl('/workouts');
   	  })
      .catch(error => {
        console.log('Something went wrong: ', error);
        alert('Try again');
      });
    }

 	logout() {
      this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
      });
    }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
