import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DbService } from '../../db.service';
import { FormsModule } from '@angular/forms';

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

  	if (newUser.valid) {
  		console.log(newUser.value);
  		this.authService.emailSignup(
  			newUser.value.email,
  			newUser.value.password
<<<<<<< HEAD
  		)
  	}
    this.dbService.userSignup(newUser)
  }
}
=======
  			);
  		}
      this.dbService.userSignup(newUser)
  }
}





>>>>>>> 7ed949add14303b9059eb7b7941b7aad3ee75b84
