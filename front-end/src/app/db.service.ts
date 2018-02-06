import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  url = 'http://localhost:3000';

   constructor(
   	private http: Http
   ) { };

   userSignup(newUser){

   	// this.http.get('http://localhost:3000/api/userTabel')
   	// 	.subscribe(response => console.log(response));

   	console.log(newUser);

   	this.http.post('http://localhost:3000/api/userTabel', newUser)
   		.subscribe(response => console.log(response));

   }

  



  //YOU WERE USEFULL FOR A HOT SEC RIP XML 1998 WAS A GOOD YEAR

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