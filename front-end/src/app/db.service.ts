import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  url: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  userSignup(newUser) {
  	console.log('hit new user signup')
  	console.log(newUser.email)
  	return this.http.get(`${this.url}`);	
  }
 

}
	