import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DbService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  userSignup(newUser) {
  	console.log('hit new user signup')
  	console.log(newUser.email)
  	return this.http.get(`${this.url}`);	
  }
 

}
	