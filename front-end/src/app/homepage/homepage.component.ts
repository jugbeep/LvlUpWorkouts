import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
  	public authService: AuthService
  	) { }

  ngOnInit() {
  }

  signOut() {
  	this.authService.logout();
  }

}

