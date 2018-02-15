import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class DbService {

  // url: string = 'http://localhost:3000';

  url: string;
  
  userName = <any> {};

  constructor(
   	private http: Http,
  		) { if(isDevMode()) {
  		this.url = 'http://localhost:3000';
  		} else {
  		this.url = '';
  	} 
  };

  userSignup(formData){

   	this.http.post('http://localhost:3000/api/userTabel', formData)
      .subscribe()
   	  // .then(response => console.log(response.json().name))

  }
}


  


