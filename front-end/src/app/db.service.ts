import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  url: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  userSignup(newUser) {
  	console.log('hit new user signup')
  	console.log(newUser.email)
  	this.http.post(`${this.url}`, newUser)	
  		.subscribe(res => console.log(res))
  };
 

}
	