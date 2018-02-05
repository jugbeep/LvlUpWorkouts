import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {

  constructor(
  	private authService: AuthService)
  	{ }

  ngOnInit() {}

  onSubmit(formData) {
    //this is the begingig of the stuff i need to mess with
    	
    if( passwordSecure(formData.value.password) ){
      console.log("your password is good");

      if (formData.valid) {
    		console.log(formData.value);
        this.authService.login(
    			formData.value.email,
    			formData.value.password
    			);
    	}
    
    }else{
      console.log("your password is no good")
    }
    
    //this is the end of the stuff i need to mess with
    }
}


//passworkd is valad
function passwordSecure( password : string ){
  //these need to be true for this to pass
  let minchars      : boolean = false;    //8 for now is min
  let hasNum        : boolean = false;
  let hasSym        : boolean = false;
  let hasLowCase    : boolean = false;
  let hasUpCase     : boolean = false;

  //for loop to see each letter of password
  for( let i : number = 0; i < password.length; i++){
      //getting charcode || DEC
      let temp : number = password.charCodeAt(i);

      //lower
      if( (temp >= 97) && (temp <= 122) ){
        hasLowCase = true;
        console.log("hasLowCase");
      }

      //uper
      if( (temp >= 65) && (temp <= 90) ){
        hasUpCase = true;
        console.log("hasUpCase");
      }

      //number
      if( (temp >= 48) && (temp <= 57) ){
        hasNum = true;
        console.log("hasNum");
      }

      //symble
      if( ( (temp >= 33) && (temp <= 47) ) ||  (temp >= 58) && (temp <= 64) ||  (temp >= 123) && (temp <= 126) || (temp >= 91) && (temp <= 96) ){
        hasSym = true;
        console.log("hasSym");
      }

      if( i >= 8 ){
        minchars = true;
        console.log("minchars");
      }

      //suming it all up
      if( minchars && hasNum && hasSym && hasLowCase && hasUpCase ){
        console.log("");
        console.log("---");
        console.log(" password is valid ");
        console.log("---");
        console.log("");
        return true;
      }else{
        console.log("");
        console.log("---");
        console.log(" password NOT is valid ");
        console.log("---");
        console.log("");

        console.log("minchars: " + minchars);
        console.log("hasNum: " + hasNum);
        console.log("hasSym: " + hasSym);
        console.log("hasLowCase: " + hasLowCase);
        console.log("hasUpCase: " + hasUpCase);
        return false;
      }

    }
  }