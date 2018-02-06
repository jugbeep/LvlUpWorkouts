import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {

	results: object []

  constructor(
  	private http: Http,
  	) { }

  ngOnInit() {
  }

  findMonster() {
		// console.log('I want to search http://dnd5eapi.co/api/');
    this.http.get('http://dnd5eapi.co/api/monsters/3') //Works
		//.toPromise()
		// .subscribe(response => console.log(response.json()));
		.subscribe(response => this.results = response.json());
	}

}
