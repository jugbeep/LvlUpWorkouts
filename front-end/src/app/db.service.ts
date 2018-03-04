import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class DbService {

  url: string; // 'http://localhost:3000/api/userTabel';
  
  userName = <any> {};

  constructor(
   	private http: Http,
  		) 
    { if(isDevMode()) {
  		this.url = 'http://localhost:3000/api/userTabel';
  		} else {
  		this.url = '/api/userTabel';
  	} 
  }


<<<<<<< HEAD


   	// this.http.post('http://localhost:3000/api/userTabel', newUser)
    //   .subscribe()
   	// 	.then(response => console.log(response.json().name))

   	this.http.post('http://localhost:3000/api/userTabel', formData)
      .subscribe()
   	  // .then(response => console.log(response.json().name))
=======
  userSignup(formData){

   	this.http.post('http://localhost:3000/api/userTabel', formData)
      .subscribe()
   	  // .then(response => console.log(response.json().name))


   	// this.http.get('http://localhost:3000/api/userTabel')
   	// 	.subscribe(response => console.log(response));

>>>>>>> master
  }


  



  //YOU WERE USEFULL FOR A HOT SEC. RIP XML, 1998 WAS A GOOD YEAR

 //  userSignup(newUser) {

 //  	console.log( "this is the new user: " + newUser)

 //  	console.log( "newUser.email: " + newUser.email);

 //  	console.log( "newUser.email: " + newUser.password);

 //  	var xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function() {
	//     if (this.readyState == 4 && this.status == 200) {
	//        // Action to be performed when the document is read;
	//     }
	// };
	// //xhttp.setRequestHeader("Content-Type", "application/json");
	// xhttp.open("POST", "http://localhost:3000/api/userTabel", true);
	// xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	// //let tempvar = JSON.parse(newUser)

	// //	//this is me manualy packaging it
	// //xhttp.send({email : newUser.email, password : newUser.password });
	// //	//this is me sending newUser 
	// xhttp.send("email=Dave");

 //  }


}