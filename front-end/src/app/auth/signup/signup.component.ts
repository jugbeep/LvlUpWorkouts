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
  
  formData = <any>{};

  constructor(
  	public authService: AuthService,
    public dbService: DbService
    ) { }

  ngOnInit() { }

  onSubmit(formData) {

  	if (formData.valid) {
  		console.log(formData.value);
  		this.authService.emailSignup(

  			formData.value.email,
  			formData.value.password
  		)
  	}
    this.dbService.userSignup(formData)
  }
}

