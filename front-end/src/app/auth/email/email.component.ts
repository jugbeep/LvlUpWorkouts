import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {

  constructor(
  	private authService: AuthService
  ){ }

  ngOnInit() {}

  onSubmit(formData) {
    //this is the begingig of the stuff i need to mess witj
  if (formData.valid) {
 	  console.log(formData.value);
    this.authService.login(
		formData.value.email,
   	formData.value.password
  	)
  }
}
}

}

