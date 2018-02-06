import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  url = 'http://localhost:3000';


  userSignup(newUser) {
  	console.log('hit new user signup')
  	console.log(newUser)
  	return this.http.post(`${this.url}`, newUser);	
  }

  constructor(private http: Http) { }

}
	