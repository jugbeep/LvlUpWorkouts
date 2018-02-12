import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../environments/environment';

//import { WorkoutDataService } from './data-model.service'
import { WorkoutsService } from './workouts.service';
import { AuthService } from './auth.service';
import { DbService } from './db.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { WorkoutStatisticsComponent } from './workout-statistics/workout-statistics.component';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { MonsterComponent } from './monster/monster.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';



export const firebaseConfig = {
  apiKey: "AIzaSyAIzdNMkeONS9GR-2Ib12rmgaj42qe7plI",
  authDomain: "login-angular-5.firebaseapp.com",
  databaseURL: "https://login-angular-5.firebaseio.com",
  projectId: "login-angular-5",
  storageBucket: "login-angular-5.appspot.com",
  messagingSenderId: "640818277665"
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    AuthComponent,
    MonsterComponent,
    PageNotFoundComponent,
    WorkoutStatisticsComponent,
    AuthComponent,
    MonsterComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
    SplashComponent,
    AboutComponent,
    WorkoutListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    // InMemoryWebApiModule.forRoot(WorkoutDataService, { dataEncapsulation: false }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [ AuthService, WorkoutsService, DbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
