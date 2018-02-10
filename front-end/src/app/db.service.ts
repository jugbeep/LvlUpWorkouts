import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  url: string = 'http://localhost:3000';
  
  userName = <any> {};

  constructor(
   	private http: Http
  ) { };

  userSignup(formData){

   	// this.http.get('http://localhost:3000/api/userTabel')
   	// 	.subscribe(response => console.log(response));

   	this.http.post('http://localhost:3000/api/userTabel', formData)
      .subscribe()
   	  // .then(response => console.log(response.json().name))
  }
}


  


