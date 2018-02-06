import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DbService } from '../../db.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  newUser = <any>{};

  constructor(
  	public authService: AuthService,
    public dbService: DbService
    ) { }

  ngOnInit() { }

  onSubmit(newUser) {
    console.log(newUser);
  	if (newUser.valid) {
  		console.log(newUser.value);
  		this.authService.emailSignup(
  			newUser.value.email,
  			newUser.value.password
  			)
  		}
      this.dbService.userSignup(newUser)
      }
  	}


